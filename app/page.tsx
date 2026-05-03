import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowIWork from "./components/HowIWork";
import Proof from "./components/Proof";
import Writing from "./components/Writing";
import Media from "./components/Media";
import AskAI from "./components/AskAI";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowIWork />
        <Proof />
        <Writing />
        <Media />
        <AskAI />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
