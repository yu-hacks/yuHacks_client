import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  
  return (
    <main className="flex  min-h-screen flex-col px-auto">
      {/* <div className="bg-red-500">Hello world</div> */}
      <HeroSection />
      <AboutSection />
      <FaqSection />
    </main>
  )
}
