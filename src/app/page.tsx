import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}
