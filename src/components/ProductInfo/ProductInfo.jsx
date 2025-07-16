import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { menu_items } from "../../Assets/Assets";
import { StoreContext } from "../../Context/StoreContext";
import "./ProductInfo.css";

export default function ProductInfo() {
  const { id } = useParams();
  const product = menu_items.find((item) => item.id === parseInt(id));
  const { addToCart } = useContext(StoreContext);
  const [note, setNote] = useState("");

  return (
    <section
      className="product-details"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      <div className="overlay"></div>
      <div className="product-box">
        <div className="name-and-price">
          <h2 className="name">{product.name}</h2>
          <p className="price">{product.price} AED</p>
        </div>

        <p className="desc">{product.description}</p>

        <div className="note-area">
          <label htmlFor="note">ملاحظات</label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="bottom-left">
          <button className="add-to-cart" onClick={() => addToCart(product.id, note)}>
            أضف للسلة
          </button>
          <div className="branch-note">
            <span>i</span>
            <p>فرع مارينا فقط</p>
          </div>
        </div>
      </div>
    </section>
  );
}
