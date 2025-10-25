import { NextResponse } from "next/server";
import { connectDB, Message } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();
    
    return NextResponse.json({
      success: true,
      count: messages.length,
      messages: messages
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({
      success: false,
      message: "Gagal memuat data dari database",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
