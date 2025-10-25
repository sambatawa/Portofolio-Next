import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.warn("Gada database");
}
export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    console.log("Database sudah terhubung");
    return;
  }
  if (!MONGODB_URI) {
    console.log("Gada database");
    return;
  }
  console.log("Hubungi DB...");
  try {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    const connectionString = MONGODB_URI.replace(/\/[^\/]*$/, '/portofolio');
    await mongoose.connect(connectionString, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("DB terhubung berhasil");
  } catch (error) {
    console.error("DB eror:", error);
    throw error; 
  }
}
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
export const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
