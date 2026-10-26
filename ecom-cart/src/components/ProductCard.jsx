import { useAddCart } from "../hooks/useAddCart";

const ProductCard = ({ product, addToCart: addToCartProp }) => {
  const { addToCart: addToCartContext } = useAddCart();
  const handleAdd = addToCartProp || addToCartContext;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div>
        <h3 className="text-lg font-semibold text-neutral-800">{product.title}</h3>
        <p className="mt-1 text-base font-bold text-blue-600">
          ₹{product.price.toLocaleString()}
        </p>
      </div>

      <button
        onClick={() => handleAdd(product)}
        className="mt-4 w-full rounded-lg bg-blue-600 py-2.5 px-4 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
