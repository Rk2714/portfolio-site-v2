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
  title: "金城竜弥｜看護師15年・AI活用アドバイザー / キャリアの相談所",
  description: "看護師15年×AI活用アドバイザー。AI導入・システム構築からキャリア相談まで、「現場の不便」をなんとかします。難しい話は抜きで、まずはお茶でも。",
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
