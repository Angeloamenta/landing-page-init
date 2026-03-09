import HeroSection from "@/components/section/hero-section";
import FeaturesSection from "@/components/section/features-section";
import AboutSection from "@/components/section/about-section";
import CtaSection from "@/components/section/cta-section";
import ContactSection from "@/components/section/contact-section";
import Slider from "@/components/section/slider";
import ProjectSection from "@/components/section/project-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <Slider />
      <ProjectSection />
      {/* 
      <FeaturesSection />
      
      <CtaSection />
      <ContactSection />
      */}
    </main>
  );
}
