import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import FaqSection from "@/components/sections/faqSection"
import About2Section from "@/components/sections/About2Section";
import SponsorSection from "@/components/sections/SponsorSection";

export default function Home() {
  
  return (
    <main className="flex  min-h-screen flex-col px-auto">
      {/* <div className="bg-red-500">Hello world</div> */}
      <HeroSection />
      <AboutSection />
      {/* <AboutPage2/> */}
      <About2Section />
      <SponsorSection />
      <FaqSection/>

      {/* <HackerFormSection/> */}
    </main>
  )
}
