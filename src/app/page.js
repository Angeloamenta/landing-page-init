import HeroSection from "@/components/section/hero-section";
import FeaturesSection from "@/components/section/features-section";
import AboutSection from "@/components/section/about-section";
import CtaSection from "@/components/section/cta-section";
import ContactSection from "@/components/section/contact-section";
import Slider from "@/components/section/slider";
import ProjectSection from "@/components/section/project-section";
import ClientsSection from "@/components/section/clients-section";
import WebGLCursorPremium from "@/components/webgl-cursor-premium";
import WebGLCursor from "@/components/webgl-cursor";
import Noise from "@/components/noise";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <Noise /> */}
      {/* <WebGLCursorPremium /> */}
      <WebGLCursor />
      <HeroSection />
      <AboutSection />
      <Slider />
      <ProjectSection />
      <ClientsSection />
      <CtaSection />
    </main>
  );
}
