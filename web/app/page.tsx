import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Nav />
      <Hero />

      <main id="main">
        <About />
        <div className="divider" />
        <Products />
        <div className="divider" />
        <Industries />
        <div className="divider" />
        <Testimonials />
        <div className="divider" />
        <Clients />
        <div className="divider" />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
