import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  // Add an item to cart
  addItem: (item) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: item.id || Date.now(),
          name: item.name || item.item || "Untitled Product",
          item: item.item || item.name || "Untitled Product",
          price: Number(item.price) || 0,
        },
      ],
    })),

  // Alias for backward compatibility with user's naming
  addItems: (item) => get().addItem(item),

  // Remove an item by id
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  // Alias for backward compatibility with user's naming
  removeItems: (id) => get().removeItem(id),

  // Clear all items
  clearCart: () => set({ items: [] }),
}));
