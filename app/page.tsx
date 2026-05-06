import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowIWork from "./components/HowIWork";
import Proof from "./components/Proof";
import Writing from "./components/Writing";
import BooksAndTools from "./components/BooksAndTools";
import Media from "./components/Media";
import Workshops from "./components/Workshops";
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
        <BooksAndTools />
        <Media />
        <Workshops />
        <AskAI />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
