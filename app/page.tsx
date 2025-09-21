import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
