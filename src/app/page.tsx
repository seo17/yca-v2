import { useEffect } from "react";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function Home() {
  useEffect(() => {
    // Create the meta tag
    const meta = document.createElement("meta");
    meta.name = "google-adsense-account";
    meta.content = "ca-pub-4668077427204289"; // Replace with your AdSense account
    
    // Add it to the document head
    document.head.appendChild(meta);
  }, []);

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
