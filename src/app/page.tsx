import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

async function getWorks() {
  const res = await fetch(
    "https://yqj3ujq81j.microcms.io/api/v1/works?limit=100&orders=-publishedAt",
    {
      headers: {
        "X-MICROCMS-API-KEY": "ydaf5pN5b4BqHJrtD67NXUa19qPUybJ9GWcX",
      },
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) {
    console.error("Failed to fetch works from microCMS");
    return { contents: [] };
  }
  return res.json();
}

export default async function Home() {
  const worksData = await getWorks();

  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Works works={worksData.contents} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
