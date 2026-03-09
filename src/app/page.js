import HeroSection from "@/components/section/hero-section";
import FeaturesSection from "@/components/section/features-section";
import AboutSection from "@/components/section/about-section";
import CtaSection from "@/components/section/cta-section";
import ContactSection from "@/components/section/contact-section";
import Slider from "@/components/section/slider";
import ProjectSection from "@/components/section/project-section";
import WebGLCursorPremium from "@/components/webgl-cursor-premium";
import WebGLCursor from "@/components/webgl-cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <WebGLCursorPremium /> */}
      <WebGLCursor />
      <HeroSection />
      <AboutSection />
      <Slider />
      <ProjectSection />
      <CtaSection />
    </main>
  );
}
