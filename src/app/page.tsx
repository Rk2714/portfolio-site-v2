import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Works from "./sections/Works";
import LatestMedia from "./sections/LatestMedia";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { siteProfile, siteContacts, defaultWorks } from "../lib/site-data";
import { getAllMediaPosts } from "../lib/media-data";

export const metadata = {
  title: "金城竜弥｜AI活用アドバイザー / 仕組みづくり / キャリア相談",
  description: "AIの使い方、Googleや予約導線の整理、キャリア相談まで。看護の現場ベースで、使える形に整えます。",
};

export default function Home() {
  const latestPosts = getAllMediaPosts();
  return (
    <>
      <Navigation />
      <main>
        <Hero profile={siteProfile} />
        <Services />
        <Works works={defaultWorks} />
        <LatestMedia posts={latestPosts} />
        <About profile={siteProfile} />
        <Contact contacts={siteContacts} />
      </main>
      <Footer />
    </>
  );
}
