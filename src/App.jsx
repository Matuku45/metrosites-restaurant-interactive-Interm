import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
       <Header/>
       <Home/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
