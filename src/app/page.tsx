import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ChatAssistant from "../components/ChatAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <WhyChoose />
      <Process />
      <About />
      <Contact />
      <Footer />
      <ChatAssistant />
      <WhatsAppButton />
    </main>
  );
}