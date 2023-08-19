import IHeroSection from "@/components/new-sections/IHeroSection";
import INavBar from "@/components/new/INavBar.component";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col px-auto">
      <INavBar />
      <IHeroSection />
    </main>
  )
}
