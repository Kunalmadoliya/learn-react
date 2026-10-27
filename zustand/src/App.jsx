import AddItems from "./components/AddItems";
import Cart from "./components/CartComponent";

const App = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">
          <span>🐻</span> Zustand Cart Store
        </h1>
        <p className="app-subtitle">
          React + Zustand state management practice
        </p>
      </header>

      <main className="app-grid">
        <AddItems />
        <Cart />
      </main>
    </div>
  );
};

export default App;
