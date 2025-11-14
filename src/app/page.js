import HeroSection from "@/components/section/hero-section";
import FeaturesSection from "@/components/section/features-section";
import AboutSection from "@/components/section/about-section";
import CtaSection from "@/components/section/cta-section";
import ContactSection from "@/components/section/contact-section";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      {/* main */}
      <FeaturesSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
    </div>
  );
}
