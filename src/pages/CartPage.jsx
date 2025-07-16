import { useLocation } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import { useEffect } from "react";

export default function CartPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Cart />
    </div>
  );
}
