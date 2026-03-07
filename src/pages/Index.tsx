import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import PolaroidIntro from "@/components/PolaroidIntro";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import GallerySection from "@/components/sections/GallerySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import SparkleTrail from "@/components/SparkleTrail";
import FloatingConfetti from "@/components/FloatingConfetti";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import DecorOverlay from "@/components/DecorOverlay";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!introComplete && <PolaroidIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {introComplete && (
        <>
          <SparkleTrail />
          <FloatingConfetti />
          <DecorOverlay />
          <Navbar />
          <main>
            <HeroSection />
            <ParallaxWrapper speed={0.2}>
              <AboutSection />
            </ParallaxWrapper>
            <ParallaxWrapper speed={0.15}>
              <WorksSection />
            </ParallaxWrapper>
            <GallerySection />
            <ParallaxWrapper speed={0.2}>
              <ServicesSection />
            </ParallaxWrapper>
            <ParallaxWrapper speed={0.15}>
              <TestimonialsSection />
            </ParallaxWrapper>
            <ParallaxWrapper speed={0.1}>
              <ContactSection />
            </ParallaxWrapper>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
