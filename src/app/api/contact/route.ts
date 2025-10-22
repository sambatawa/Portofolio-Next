import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from "dns/promises";

export const runtime = "nodejs";

type MailboxLayerResult = {
    isValid: boolean;
    raw?: unknown;
};
async function verifyEmailWithMailboxLayer(email: string): Promise<MailboxLayerResult> {
    const apiKey = process.env.MAILBOXLAYER_API_KEY;
    try {
        const response = await fetch(`https://apilayer.net/api/check?access_key=${apiKey}&email=${encodeURIComponent(email)}&smtp=1&format=1`);
        const data = await response.json();
        if (data && data.success === false) {
            return { isValid: false, raw: data };
        }
        const formatValid = data?.format_valid === true;
        const mxFound = data?.mx_found === true;
        const smtpOk = data?.smtp_check === true;
        const notDisposable = data?.disposable === false || data?.disposable == null;
        const notRole = data?.role === false || data?.role == null;
        const noSuggestion = !data?.did_you_mean;
        const scoreOk = typeof data?.score !== "number" || data.score >= 0.6;
        const isValid = Boolean(
            formatValid && mxFound && smtpOk && notDisposable && notRole && noSuggestion && scoreOk
        );
        return { isValid, raw: data };
    } catch (error) {
        console.error("Gagal memeriksa email di MailboxLayer:", error);
        return { isValid: false };
    }
}
export async function POST(req: Request) {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        return NextResponse.json(
            { message: "Content-Type harus application/json", success: false },
            { status: 400 }
        );
    }
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { message: "JSON tidak valid", success: false },
            { status: 400 }
        );
    }
    const { name, email, subject, message } = (body as Record<string, unknown>) || {};
    if (!name || !email || !subject || !message) {
        return NextResponse.json(
            { message: "Semua field wajib diisi", success: false },
            { status: 400 }
        );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
        return NextResponse.json(
            { message: "Format email tidak valid", success: false },
            { status: 400 }
        );
    }
    //Tahap 1: Cek domain email
    try {
        const domain = String(email).split("@")[1];
        const mxRecords = await dns.resolveMx(domain);

        if (!mxRecords || mxRecords.length === 0) {
            return NextResponse.json(
                { message: "Domain email tidak memiliki server email (MX record)", success: false },
                { status: 400 }
            );
        }
    } catch {
        return NextResponse.json(
            { message: "Domain email tidak valid atau tidak dapat diverifikasi", success: false },
            { status: 400 }
        );
    }
    //Tahap 2: Verifikasi email valid
    const verifyResult = await verifyEmailWithMailboxLayer(String(email));
    if (!verifyResult.isValid) {
        return NextResponse.json(
            { message: "Email tidak bisa diverifikasi", success: false },
            { status: 400 }
        );
    }
    //Tahap 3: Pesan bisa terkirim
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        const time = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
        await transporter.sendMail({
            from: { name: "Portofolio", address: String(process.env.EMAIL_USERNAME) },
            replyTo: String(email),
            to: { name: "Portofolio", address: String(process.env.EMAIL_USERNAME) },
            subject: `Formulir Kontak – ${String(subject)} (dari ${String(name)})`,
            html: `
                <div style="font-family: Arial, Helvetica, sans-serif; color: #111; line-height: 1.6;">
                    <p>Pesan baru dari formulir kontak portofolio:</p>
                    <ul>
                        <li><strong>Nama:</strong> ${String(name)}</li>
                        <li><strong>Email:</strong> ${String(email)}</li>
                        <li><strong>Perihal:</strong> ${String(subject)}</li>
                    </ul>
                    <blockquote style="padding:12px 16px; background:#f6f8fa; border-left:4px solid #3ebcca;">
                        ${String(message)}
                    </blockquote>
                    <p style="font-size:12px;color:#555;">Dikirim pada: ${time} WIB</p>
                </div>`,
        });
        return NextResponse.json(
            { message: "Pesan berhasil dikirim", success: true },
            { status: 200 }
        );
        } catch (error) {
            console.error("Error mengirim email:", error);
        return NextResponse.json(
            { message: "Gagal mengirim pesan", success: false },
            { status: 500 }
        );
    }
}
