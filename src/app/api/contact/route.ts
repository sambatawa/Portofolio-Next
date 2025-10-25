import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from "dns/promises";
import {connectDB, Message} from "@/lib/db";

export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Cross-Origin-Embedder-Policy": "unsafe-none",
  "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
  "Cross-Origin-Resource-Policy": "cross-origin",
};

type MailboxLayerResult = {
    isValid: boolean;
    raw?: unknown;
};
async function verifyEmailWithMailboxLayer(email: string): Promise<MailboxLayerResult> {
    const apiKey = process.env.MAILBOXLAYER_API_KEY;
    if (!apiKey) {
        console.log("MAILBOXLAYER_API_KEY tidak ditemukan, skip email verification");
        return { isValid: true };
    }
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
        return { isValid: true }; 
    }
}
const accessMap = new Map<string, number>();
function rateLimit(ip: string, ms = 15_000) {
    const now = Date.now();
    const last = accessMap.get(ip) || 0;
    if (now - last < ms) return false;
    accessMap.set(ip, now);
    return true;
}
async function verifyRecap(token: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
        console.log("secret key gada, skip verifikasi");
        return true;
    }
    try {
        const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: `secret=${secret}&response=${token}`
        });
        const data = await res.json();
        return data.success === true;
    } catch (error) {
        console.error("Gagal verifikasi reCAPTCHA:", error);
        return true; 
    }
}
export async function OPTIONS() {
    return new NextResponse(null, { status: 200, headers: corsHeaders });
}

export async function POST(req: Request) {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        return NextResponse.json(
            { message: "Content-Type harus application/json", success: false },
            { status: 400, headers: corsHeaders }
        );
    }
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (!rateLimit(ip)) {
        return NextResponse.json(
            { message: "Maximum Limit access", success: false },
            { status: 429, headers: corsHeaders }
        );
    }
    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { message: "JSON tidak valid", success: false },
            { status: 400, headers: corsHeaders }
        );
    }
    const { name, email, subject, message, token } = body;
    if (!name || !email || !subject || !message || !token) {
        return NextResponse.json(
            { message: "Semua field wajib diisi", success: false },
            { status: 400, headers: corsHeaders }
        );
    }
    //recaptcha verification
    const recapValid = await verifyRecap(String(token));
    if (!recapValid) {
        return NextResponse.json({ message: "reCAPTCHA gagal.", success: false }, { status: 400, headers: corsHeaders });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
        return NextResponse.json(
            { message: "Format email tidak valid", success: false },
            { status: 400, headers: corsHeaders }
        );
    }
    //Tahap 1: Cek domain email
    try {
        const domain = String(email).split("@")[1];
        const mxRecords = await dns.resolveMx(domain);

        if (!mxRecords || mxRecords.length === 0) {
            return NextResponse.json(
                { message: "Domain email tidak memiliki server email (MX record)", success: false },
                { status: 400, headers: corsHeaders }
            );
        }
    } catch {
        return NextResponse.json(
            { message: "Domain email tidak valid atau tidak dapat diverifikasi", success: false },
            { status: 400, headers: corsHeaders }
        );
    }
    //Tahap 2: Verifikasi email valid
    const verifyResult = await verifyEmailWithMailboxLayer(String(email));
    if (!verifyResult.isValid) {
        return NextResponse.json(
            { message: "Email tidak bisa diverifikasi", success: false },
            { status: 400, headers: corsHeaders }
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
    } catch (error) {
        console.error("Error mengirim email:", error);
        return NextResponse.json({ message: "Gagal mengirim pesan.", success: false }, { status: 500, headers: corsHeaders });
    }
    // Tahap 4: Simpan ke db
    try {
        console.log("Connecting to database...");
        await connectDB();
        await Message.create({ 
            name: String(name), 
            email: String(email), 
            subject: String(subject), 
            message: String(message) 
        });
        console.log("Berhasil disimpan ke database:");
    } catch (dbError) {
        console.error("Database error:", dbError);
        console.log("Database tidak tersedia, tapi email tetap terkirim");
    }
    return NextResponse.json({ message: "Pesan berhasil dikirim dan disimpan.", success: true }, { headers: corsHeaders });
}
