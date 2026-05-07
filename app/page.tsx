import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import HowIWork from "./components/HowIWork";
import BooksAndTools from "./components/BooksAndTools";
import Writing from "./components/Writing";
import Media from "./components/Media";
import Workshops from "./components/Workshops";
import FloatingChat from "./components/FloatingChat";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <HowIWork />
        <BooksAndTools />
        <Writing />
        <Media />
        <Workshops />
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
}
