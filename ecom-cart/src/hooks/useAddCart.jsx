/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const AddCartContext = createContext(undefined);

export function AddCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add product to cart (or increment quantity if already present)
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Update quantity (removes item if quantity drops to 0 or below)
  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Calculate total item count
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    total,
    totalCount,
  };

  return (
    <AddCartContext.Provider value={value}>
      {children}
    </AddCartContext.Provider>
  );
}

export function useAddCart() {
  const context = useContext(AddCartContext);
  if (context === undefined) {
    throw new Error("useAddCart must be used inside AddCartProvider");
  }
  return context;
}
