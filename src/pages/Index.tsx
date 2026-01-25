import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import EmotionalQuote from "@/components/sections/EmotionalQuote";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Features />
      <EmotionalQuote />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
