import "./Navbar.css";
import { Assets } from "../../Assets/Assets";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
export default function Navbar({ changeColorAndLogo }) {
  const location = useLocation();
  const onCartPage = location.pathname === "/cart";
  const CartPage = location.pathname === "/cart";
  const [menu, setMenu] = useState("main");
  const { cartItems } = useContext(StoreContext);

  const totalCount = Object.values(cartItems).reduce(
    (a, b) => a + b.quantity,
    0
  );
  return (
    <nav className="navbar" style={{ color: onCartPage ? "black" : "#fff" }}>
      <div className="container">
        <img
          src={onCartPage ? Assets.logo2 : Assets.logo}
          alt="Logo"
          className="logo"
        />
        <ul className="nav-links">
          <li
            className={menu === "main" ? "active" : ""}
            onClick={() => setMenu("main")}
          >
            <a href="#">الرئيسية</a>
          </li>
          <li
            className={menu === "whoWeAre" ? "active" : ""}
            onClick={() => setMenu("whoWeAre")}
          >
            <a href="#contact">من نحن</a>
          </li>
          <li
            className={menu === "mostPopularItems" ? "active" : ""}
            onClick={() => setMenu("mostPopularItems")}
          >
            <a href="#mostPopularItems">الأصناف الأكثر طلباً</a>
          </li>
          <li
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu("menu")}
          >
            <a href="#menu">قائمة الطعام</a>
          </li>
          <button className="contact-btn">
            <a href="#contact">CONTACT US</a>
          </button>
          <NavLink to="/cart" className="basket-icon">
            <img
              src={!CartPage ? Assets.basket_icon : Assets.basket_icon3}
              alt="basket"
              className="basket"
            />
            <span className="basket-count">{totalCount}</span>
          </NavLink>
          <span className="lang">EN</span>
        </ul>
      </div>
    </nav>
  );
}
