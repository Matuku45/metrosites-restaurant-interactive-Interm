import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-600 drop-shadow-sm">
          🍽️ MetroSites Restaurant
        </h1>

        <p className="text-lg md:text-xl text-center max-w-xl mb-8 text-blue-400">
          Experience the taste of perfection — fresh ingredients, creative dishes,
          and a cozy atmosphere that makes every visit unforgettable.
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Reserve Table ({count})
        </button>
      </div>
    </>
  );
}

export default App;
