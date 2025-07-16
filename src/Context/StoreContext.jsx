import { createContext, useState } from "react";
import { menu_items } from "../Assets/Assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, note = "") => {
    setCartItems((prev) => {
      const existing = prev[itemId];

      return {
        ...prev,
        [itemId]: existing
          ? { ...existing, quantity: existing.quantity + 1 }
          : { quantity: 1, note },
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (!updated[itemId]) return prev;

      updated[itemId].quantity--;
      if (updated[itemId].quantity <= 0) delete updated[itemId];
      return updated;
    });
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, { quantity }]) => {
      const item = menu_items.find((el) => el.id === parseInt(id));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCartAmount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
