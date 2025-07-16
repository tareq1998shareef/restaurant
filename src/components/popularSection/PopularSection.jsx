import { MdStar, MdStarBorder } from "react-icons/md";
import { categories, products } from "../../Assets/Assets";
import "./PopularSection.css";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

export default function PopularSection({ topBar }) {
  const { addToCart } = useContext(StoreContext);
  const productListRef = useRef(null);
  const handleScroll = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <section id="mostPopularItems" className="popular-section">
      <div className="top-bar" style={{ display: topBar ? "flex" : "none" }}>
        <div className="categories">
          {categories.map((cat, index) => (
            <div
              className="category"
              key={index}
              style={{
                color:
                  cat.name === "سناك"
                    ? "#22935F"
                    : cat.name === "بروستد"
                    ? "black"
                    : "#DD1015",
              }}
            >
              <img className="icon" src={cat.icon} alt={cat.name} />
              {cat.name}
            </div>
          ))}
        </div>
      </div>
      <h2
        className="section-title"
        style={{ color: topBar ? "#dd1015" : "#22935F" }}
      >
        {topBar ? "الأصناف الأكثر طلباً" : "أصناف مشابهة"}
      </h2>

      <div className="product-list" ref={productListRef}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="product-info">
              <div className="name-and-price">
                <h3 className="name">{product.name}</h3>
                <p className="price">{product.price} ADE</p>
              </div>
              <div className="actions">
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product.id)}
                >
                  أضف للسلة
                </button>
                <Link to={`/info/${product.id}`} className="more-btn">
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

      <div className="more">
        <button
          className="more-btn-main"
          onClick={handleScroll}
          style={{ backgroundColor: topBar ? "#dd1015" : "#22935F" }}
        >
          المزيد
        </button>
        {!topBar && (
          <button className="go-to-home">
            <Link to={"/"}>عودة للصفحة الرئيسية</Link>
          </button>
        )}
      </div>
    </section>
  );
}
