import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import LatestMedia from "./sections/LatestMedia";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { siteProfile, siteContacts } from "../lib/site-data";
import { getAllMediaPosts } from "../lib/media-data";

export const metadata = {
  title: "金城竜弥｜医療・介護現場の業務改善パートナー / Yazirusi 代表",
  description: "看護・訪問看護・オンライン診療の経験をもとに、記録・連絡・情報共有・AI活用を現場に合わせて整えます。ラジオや子ども食堂の活動も含めた紹介ページです。",
};

export default function Home() {
  const latestPosts = getAllMediaPosts().slice(0, 6);
  return (
    <>
      <Navigation />
      <main>
        <Hero profile={siteProfile} />
        <Services />
        <About profile={siteProfile} />
        <LatestMedia posts={latestPosts} />
        <Contact contacts={siteContacts} />
      </main>
      <Footer />
    </>
  );
}
