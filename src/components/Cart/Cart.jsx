import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { Assets, menu_items } from "../../Assets/Assets";
import "./Cart.css";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export default function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    deleteFromCart,
  } = useContext(StoreContext);

const cartArray = Object.entries(cartItems)
  .map(([id, { quantity, note }]) => {
    const product = menu_items.find((p) => p.id === parseInt(id));
    return product ? { ...product, quantity, note } : null;
  })
  .filter(Boolean);


  const handleOrderSubmit = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ order: cartArray }),
        }
      );

      if (!response.ok) throw new Error("فشل في إرسال الطلب");

      const data = await response.json();
      console.log("تم إرسال الطلب بنجاح:", data);
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال الطلب:", error);
    }
  };

  return (
    <section className="cart-container">
      <div className="cart-top">
        <div className="basket">
          <h2 className="cart-title">السلة</h2>
          <img src={Assets.basket_icon2} alt="basket" />
        </div>

        <div className="cart-list">
          {cartArray.length ? (
            cartArray.map((item) => (
              <div className="cart-row" key={item.id}>
                <div className="cart-info">
                  <p className="cart-name">{item.name}</p>
                  {item.note && (
                    <p className="cart-note">{item.note}</p>
                  )}
                </div>

                <div className="cart-qty">
                  <button
                    className="sub"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="add" onClick={() => addToCart(item.id)}>
                    +
                  </button>
                </div>

                <div className="cart-price">{item.price} AED</div>

                <div
                  className="cart-delete"
                  onClick={() => deleteFromCart(item.id)}
                >
                  <AiOutlineDelete />
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">السلة فارغة</p>
          )}
        </div>
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span className="sum">المجموع</span> (السعر غير متضمن الضريبة
          والتوصيل)
          <div className="total">AED {getTotalCartAmount()}</div>
        </div>
        <button className="whatsapp-btn" onClick={handleOrderSubmit}>
          اطلب الآن
          <span>
            <FaWhatsapp />
          </span>
        </button>
      </div>
    </section>
  );
}
