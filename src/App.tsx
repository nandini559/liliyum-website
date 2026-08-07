import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection";
import { Product } from "./pages/Product";

export const App: React.FC = () => {
  return (<Router>
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2D2422] font-sans antialiased w-full max-w-full overflow-x-hidden relative">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/product/:id" element={<Product />}/> */}
        </Routes>
      </div>
      <Footer />
      <FloatingActions />
    </div>
  </Router>);
};

export default App;
