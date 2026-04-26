import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
