import Layouts from "@/components/layouts";
import AboutSection from "@/components/layouts/AboutmeSection/AboutmeSection";
import ContactSection from "@/components/layouts/ContactSection/ContactSection";
import Footer from "@/components/layouts/Footer/Footer";
import JumbotronSection from "@/components/layouts/JumbotronSection/JumbotronSection";
import PortfolioSection from "@/components/layouts/PortfolioSection/PortfolioSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layouts.HeroSection />
      <AboutSection />
      <JumbotronSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}
