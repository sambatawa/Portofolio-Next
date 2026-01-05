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
        console.log("RECAPTCHA_SECRET_KEY tidak ditemukan di .env");
        return false;
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
        return false; 
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
    const verifyResult = await verifyEmailWithMailboxLayer(String(email));
    if (!verifyResult.isValid) {
        return NextResponse.json(
            { message: "Email tidak bisa diverifikasi", success: false },
            { status: 400, headers: corsHeaders }
        );
    }
    let emailSent = false;
    try {
        const username = process.env.EMAIL_USERNAME;
        const password = process.env.EMAIL_PASSWORD;
        
        if (!username || !password) {
            console.log("Email credentials not configured");
            throw new Error("Email credentials not configured");
        }
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: username,
                pass: password,
            },
        });
        const time = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
        await transporter.sendMail({
            from: { name: "Portofolio", address: username },
            replyTo: String(email),
            to: { name: "Portofolio", address: username },
            subject: `Formulir Kontak – ${String(subject)} (dari ${String(name)})`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px;">PORTFOLIO CONTACT</h1>
                        <p style="color: #e0e0e0; margin: 10px 0 0 0; font-size: 14px;">New Message Received</p>
                    </div>
                    
                    <div style="padding: 20px 0px;">
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
                            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 5px;">Contact Information</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr style="border-bottom: 1px solid #e9ecef;">
                                    <td style="padding: 12px 0; color: #666; font-weight: 600; width: 120px;">Nama:</td>
                                    <td style="padding: 12px 0; color: #333;">${String(name)}</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #e9ecef;">
                                    <td style="padding: 12px 0; color: #666; font-weight: 600;">Email:</td>
                                    <td style="padding: 12px 0; color: #333;">${String(email)}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #666; font-weight: 600;">Tujuan:</td>
                                    <td style="padding: 12px 0; color: #333;">${String(subject)}</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div style="margin-bottom: 25px;">
                            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 5px;">Message</h2>
                            <div style="background: #ffffff; padding: 20px; color: #333; line-height: 1.6;">
                                ${String(message)}
                            </div>
                        </div>
                        
                        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e9ecef;">
                            <p style="color: #666; margin: 0; font-size: 12px;">
                                This message was sent on ${time} WIB<br>
                                Please respond to the sender at your earliest convenience.
                            </p>
                        </div>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e9ecef;">
                        <p style="color: #666; margin: 0; font-size: 12px;">
                            © Portfolio Contact Form
                        </p>
                    </div>
                </div>`,
        });
        emailSent = true;
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error mengirim email:", error);
        console.log("Continuing without email - will save to database");
    }
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
    const successMessage = emailSent 
        ? "Pesan berhasil dikirim dan disimpan." 
        : "Pesan berhasil disimpan. Email tidak dapat dikirim karena konfigurasi.";
    return NextResponse.json({ message: successMessage, success: true }, { headers: corsHeaders });
}
