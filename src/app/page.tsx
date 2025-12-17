import Image from "next/image";
import bg from "../../public/bg2.png";
import LandingPage from "@/components/LandingPage";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import FloatingChatbot from "@/components/FloatingChatbot";

export default function Home() {
  return (
    <>
      <CustomCursor />    
      <Navbar />
      <FloatingChatbot />
      <div className="flex w-full max-w-screen min-h-screen flex-col relative bg-gradient-dark m-0 p-0 overflow-x-hidden">
        <Image src={bg} priority={false} alt="Background" fill className="object-cover w-full h-full absolute inset-0 z-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 z-5"></div>
        <div className="w-full h-full flex flex-col items-center relative z-10">
          <LandingPage />
        </div>       
      </div>
    </>
  );
}
