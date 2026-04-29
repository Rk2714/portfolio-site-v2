import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Marquee from "./sections/Marquee";
import Services from "./sections/Services";
import Works from "./sections/Works";
import Trust from "./sections/Trust";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Skills from "./sections/Skills";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

const API_KEY = "ydaf5pN5b4BqHJrtD67NXUa19qPUybJ9GWcX";
const SERVICE_ID = "yqj3ujq81j";

async function fetchMicroCMS(endpoint: string, fallback: any) {
  try {
    const res = await fetch(
      `https://${SERVICE_ID}.microcms.io/api/v1/${endpoint}?limit=100`,
      {
        headers: { "X-MICROCMS-API-KEY": API_KEY },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

export const metadata = {
  title: "金城竜弥｜看護師13年の経験で医療現場にAIを導入する",
  description: "看護師13年の臨床経験を持つAI導入コンサルタント金城竜弥。医療現場の業務効率化、AI議事録導入支援、キャリアコンサルティングを提供します。",
};

export default async function Home() {
  const worksData = await fetchMicroCMS("works", { contents: [] });
  const profileData = await fetchMicroCMS("profile", { contents: [] });
  const profile = profileData.contents[0] || null;
  const skillsData = await fetchMicroCMS("skills", { contents: [] });
  const contactsData = await fetchMicroCMS("contacts", { contents: [] });
  const contacts = contactsData.contents[0] || null;

  const worksFiltered = (worksData.contents || []).filter(
    (w: any) => w.title !== "キッズゲームコレクション"
  );

  return (
    <>
      <Navigation />
      <main>
        <Hero profile={profile} />
        <Problem />
        <Marquee />
        <Services />
        <Works works={worksFiltered} />
        <Trust />
        <Testimonials />
        <About profile={profile} />
        <Skills skills={skillsData.contents} />
        <FAQ />
        <Contact contacts={contacts} />
      </main>
      <Footer />
    </>
  );
}
