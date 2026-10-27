import { useState } from "react";
import { useCartStore } from "../store/useCartStore";

const AddItems = () => {
  const addItems = useCartStore((state) => state.addItems);

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleCart = (e) => {
    e.preventDefault();

    if (!item.trim() || !price || Number(price) <= 0) {
      setError("Please enter a valid item name and price.");
      return;
    }

    addItems({
      id: Date.now(),
      name: item.trim(),
      item: item.trim(),
      price: Number(price),
    });

    setItem("");
    setPrice("");
    setError("");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Add New Product</h2>
      </div>

      <form onSubmit={handleCart}>
        <div className="form-group">
          <label className="form-label" htmlFor="item-name">
            Product Name
          </label>
          <input
            id="item-name"
            className="form-input"
            type="text"
            placeholder="e.g. Wireless Mouse"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
              if (error) setError("");
            }}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="item-price">
            Price (₹)
          </label>
          <input
            id="item-price"
            className="form-input"
            type="number"
            min="0"
            step="any"
            placeholder="e.g. 799"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              if (error) setError("");
            }}
          />
        </div>

        {error && <p className="form-error">⚠️ {error}</p>}

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: error ? "12px" : "8px" }}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default AddItems;
