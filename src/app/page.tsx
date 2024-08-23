import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-background h-full flex flex-col items-center">
      <Navbar />
      <HeroSection />
    </div>
  );
}
