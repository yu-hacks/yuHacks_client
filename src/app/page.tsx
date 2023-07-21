import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import FaqSection from "@/components/sections/faqSection";
import AboutPage2 from "@/pages/AboutPage2";

export default function Home() {
  
  return (
    <main className="flex  min-h-screen flex-col px-auto">
      {/* <div className="bg-red-500">Hello world</div> */}
      <HeroSection id="Hero"/>
      <AboutSection id="About1"/>
      <AboutPage2/>
      <FaqSection id="FAQ"/>
    </main>
  )
}
