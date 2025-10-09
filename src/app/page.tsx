import Image from "next/image";
import bg from "../../public/bg2.png";
import LandingPage from "@/components/LandingPage";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <CustomCursor />    
      <Navbar />
      <div className="flex w-full max-w-screen min-h-screen flex-col relative bg-black m-0 p-0 overflow-x-hidden">
        <Image src={bg} priority={false} alt="Background" fill className="object-cover w-full h-full absolute inset-0 z-0" />
        <div className="w-full h-full flex flex-col items-center bg-black/60 backdrop-blur-xl z-10">
          <LandingPage />
        </div>       
      </div>
    </>
  );
}
