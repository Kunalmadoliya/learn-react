import { useAddCart } from "../hooks/useAddCart";

const CartItem = ({
  item,
  onUpdateQuantity: updateProp,
  onRemove: removeProp,
}) => {
  const { updateQuantity: updateCtx, removeFromCart: removeCtx } = useAddCart();
  const handleUpdate = updateProp || updateCtx;
  const handleRemove = removeProp || removeCtx;

  return (
    <div className="flex items-center justify-between border-b border-neutral-200 py-3 last:border-b-0">
      <div className="flex-1 min-w-0 pr-3">
        <h4 className="truncate text-sm font-semibold text-neutral-800">
          {item.title}
        </h4>
        <p className="text-xs text-neutral-500">
          ₹{item.price.toLocaleString()} × {item.qty} ={" "}
          <span className="font-semibold text-neutral-700">
            ₹{(item.price * item.qty).toLocaleString()}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-lg border border-neutral-300">
          <button
            onClick={() => handleUpdate(item.id, item.qty - 1)}
            className="flex h-7 w-7 items-center justify-center text-sm font-bold text-neutral-600 transition hover:bg-neutral-100"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-8 text-center text-sm font-medium text-neutral-800">
            {item.qty}
          </span>
          <button
            onClick={() => handleUpdate(item.id, item.qty + 1)}
            className="flex h-7 w-7 items-center justify-center text-sm font-bold text-neutral-600 transition hover:bg-neutral-100"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={() => handleRemove(item.id)}
          className="rounded-lg p-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50 hover:text-red-700"
          title="Remove from cart"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
