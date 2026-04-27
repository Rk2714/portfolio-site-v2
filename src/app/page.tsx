import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
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

export default async function Home() {
  const worksData = await fetchMicroCMS("works", { contents: [] });

  const profileData = await fetchMicroCMS("profile", { contents: [] });
  const profile = profileData.contents[0] || null;

  const skillsData = await fetchMicroCMS("skills", { contents: [] });

  const contactsData = await fetchMicroCMS("contacts", { contents: [] });
  const contacts = contactsData.contents[0] || null;

  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero profile={profile} />
        <About profile={profile} />
        <Works works={worksData.contents} />
        <Skills skills={skillsData.contents} />
        <Contact contacts={contacts} />
      </main>
      <Footer />
    </>
  );
}
