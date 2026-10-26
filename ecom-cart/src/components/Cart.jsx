import CartItem from "./CartItem";
import { useAddCart } from "../hooks/useAddCart";

const Cart = ({
  cart: cartProp,
  onUpdateQuantity,
  onRemove,
  total: totalProp,
}) => {
  const context = useAddCart();
  const cart = cartProp || context.cart;
  const total = totalProp !== undefined ? totalProp : context.total;
  const totalCount = context.totalCount;

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
        <h2 className="text-xl font-bold text-neutral-800">Shopping Cart</h2>
        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
          {totalCount} {totalCount === 1 ? "item" : "items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="py-8 text-center text-neutral-500">
          <p className="text-sm">Your cart is empty.</p>
          <p className="mt-1 text-xs text-neutral-400">
            Add items from the store to see them here!
          </p>
        </div>
      ) : (
        <>
          <div className="my-4 divide-y divide-neutral-100">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="border-t border-neutral-200 pt-4">
            <div className="flex items-center justify-between text-base font-semibold text-neutral-900">
              <span>Total</span>
              <span className="text-lg text-blue-600">
                ₹{total.toLocaleString()}
              </span>
            </div>
            <button className="mt-4 w-full rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-[0.98]">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
