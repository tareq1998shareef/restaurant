import { useLocation } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import PopularSection from "../components/PopularSection/PopularSection";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import { useEffect } from "react";

export default function Info() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <ProductInfo />
      <PopularSection />
      <Contact />
    </div>
  );
}
