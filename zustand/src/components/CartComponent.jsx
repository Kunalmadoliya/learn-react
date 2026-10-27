import { useCartStore } from "../store/useCartStore.js";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

  return (
    <div className="card">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h2 className="card-title">Shopping Cart</h2>
          <span className="card-counter">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>

        {items.length > 0 && (
          <button onClick={clearCart} className="btn-clear" title="Remove all items">
            Clear all
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <span className="empty-state-icon">🛒</span>
          <p className="empty-state-title">Your cart is empty</p>
          <p className="empty-state-desc">
            Use the form on the left to add items to your cart.
          </p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name || item.item}</span>
                  <span className="cart-item-price">
                    ₹{Number(item.price).toLocaleString()}
                  </span>
                </div>

                <button
                  type="button"
                  className="btn-danger-outline"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <span className="cart-total-label">Total Amount</span>
            </div>
            <span className="cart-total-value">
              ₹{totalPrice.toLocaleString()}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
