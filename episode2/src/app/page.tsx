import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-h-screen relative w-full  inset-0 bg-radial from-white to-blue-200">
      <div className="max-w-2xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b
        from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"/>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b
        from-neutral-300/50 via-neutral-200 to-transparent  pointer-events-none z-0"/>

      </div>
      <Container>
        <Navbar />
        <Hero/>
      </Container>

      <div className="relative w-full">
        <div className="h-px w-full absolute inset-x-0 bg-linear-to-r
        from-neutal-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto p-2">
       <Image src="/hero-ui-v6.webp" alt="banner image" width={500} height={500} 
       className="rounded-xl w-full object-cover object-top-left border-neutral-200 shadow-md mask-b-from-20% to-60%"/>
       </div>
      </div>
    </div>
  );
}
