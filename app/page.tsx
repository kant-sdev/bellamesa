import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import AboutSection from "@/components/layout/Section/about-section";
import ContactSection from "@/components/layout/Section/contact-section";
import HeroSection from "@/components/layout/Section/hero-section";
import MenuSection from "@/components/layout/Section/menu-section";
import TestimonialsSection from "@/components/layout/Section/testemonials-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection />
      <ContactSection/>
      <Footer/>
    </main>
  )
}
