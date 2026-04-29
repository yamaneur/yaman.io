import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import FitAssessment from "./components/FitAssessment";
import Blog from "./components/Blog";
import Podcast from "./components/Podcast";
import Participations from "./components/Participations";
import AskAI from "./components/AskAI";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <FitAssessment />
        <Blog />
        <Podcast />
        <Participations />
        <AskAI />
      </main>
      <Footer />
    </>
  );
}
