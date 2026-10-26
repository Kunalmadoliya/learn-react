import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { AddCartProvider, useAddCart } from "./hooks/useAddCart";
import { products } from "./sample-data/data";

function StoreContent() {
  const { totalCount } = useAddCart();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white px-6 py-4 shadow-xs sticky top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-neutral-800">
            Tech Store
          </h1>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-600">
            <span>Cart:</span>
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
              {totalCount}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Products Column */}
          <section className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-bold text-neutral-800">
              Available Products
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Cart Column */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <Cart />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

const App = () => {
  return (
    <AddCartProvider>
      <StoreContent />
    </AddCartProvider>
  );
};

export default App;
