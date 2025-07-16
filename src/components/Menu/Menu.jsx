import "./Menu.css";
import { useState, useContext } from "react";
import { mwnu_categories, menu_items } from "../../Assets/Assets";
import { MdStar, MdStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

export default function Menu() {
  const [activeCat, setActiveCat] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const { addToCart } = useContext(StoreContext);

  const filteredItems =
    activeCat === "all"
      ? menu_items
      : menu_items.filter((item) => item.category === activeCat);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-title">المنيو</h2>

      <div className="menu-tabs">
        {mwnu_categories.map((cat) => (
          <button
            key={cat.id}
            className={`menu-tab ${activeCat === cat.id ? "active" : ""}`}
            onClick={() => {
              setActiveCat(cat.id);
              setVisibleCount(8);
            }}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {visibleItems.map((item) => (
          <div to={`/info/${item.id}`} className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-info">
              <div className="name-and-price">
                <h3>{item.name}</h3>
                <p className="price">{item.price} ADE</p>
              </div>
              <div className="actions">
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(item.id)}
                >
                  أضف للسلة
                </button>
                <Link to={`/info/${item.id}`} className="more-btn">
                  المزيد
                </Link>
                <div className="stars">
                  <MdStarBorder />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredItems.length && (
        <div className="show-more">
          <button className="show-more-btn" onClick={handleShowMore}>
            عرض المزيد
          </button>
        </div>
      )}
    </section>
  );
}
