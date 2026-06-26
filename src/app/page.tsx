import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Marquee from "./sections/Marquee";
import Services from "./sections/Services";
import Works from "./sections/Works";
import LatestMedia from "./sections/LatestMedia";

import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Skills from "./sections/Skills";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import { siteProfile, siteContacts, defaultWorks, defaultSkills } from "../lib/site-data";
import { getAllMediaPosts } from "../lib/media-data";

export const metadata = {
  title: "金城竜弥｜看護師15年の現場目線でDXをカタチに",
  description: "現場の「これなんとかならん？」をAIと仕組みで解決。AI活用講座・DX業務改善・AI活用法診断——看護師15年×AI活用アドバイザーが現場目線で伴走します。",
};

export default function Home() {
  const latestPosts = getAllMediaPosts();
  return (
    <>
      <Navigation />
      <main>
        <Hero profile={siteProfile} />
        <Problem />
        <Marquee />
        <Services />
        <Works works={defaultWorks} />
        <LatestMedia posts={latestPosts} />
        <Testimonials />
        <About profile={siteProfile} />
        <Skills skills={defaultSkills} />
        <FAQ />
        <Contact contacts={siteContacts} />
      </main>
      <Footer />
    </>
  );
}
