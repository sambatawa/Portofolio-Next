import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
    message: string
    success: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                message: "Tidak lengakap", 
                success: false 
            });
        }
        const transporter = nodemailer.createTransport({
            service: "gmail", auth:{
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USERNAME,
            subject: `New message from ${name}: ${subject}`,
            text: message,
            html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
        }
        try {
            await transporter.sendMail(mailOptions);
            console.log("Pesan diterima:", { name, email, subject, message });
                return res.status(200).json({ 
                    message: "Pesan berhasil dikirim", 
                    success: true 
                });
        } catch (error) {
            console.error("Error mengirim email:", error);
            return res.status(500).json({ 
                message: "Gagal mengirim pesan", 
                success: false 
            });
        }
    }else {
        res.setHeader("Allow", ['POST']);
        return res.status(405).json({ 
            message: `Method ${req.method} Not Allowed`, 
            success: false 
        });
    }
}