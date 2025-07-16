import { useLocation } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";
import HeroSection from "../components/HeroSection/HeroSection";
import Menu from "../components/Menu/Menu";
import PopularSection from "../components/popularSection/popularSection";
import { useEffect } from "react";

export default function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="home">
      <HeroSection />
      <PopularSection topBar />
      <Menu />
      <About />
      <Gallery />
      <Contact rectangle map />
    </div>
  );
}
