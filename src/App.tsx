import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {FloatingActions} from "./components/FloatingActions";
import {Home} from "./pages/Home";
import {Collection} from "./pages/Collection";
import {Product} from "./pages/Product";
import {About} from "./pages/About";
import {OrderModalProvider} from "./context/OrderModalContext";
import {OrderModal} from "./components/OrderModal";

export const App: React.FC = () => {
  return (<OrderModalProvider>
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2D2422] font-sans antialiased w-full max-w-full overflow-x-hidden relative">
        <Navbar/>
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Collection />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/product" element={<Product />}/>
          </Routes>
        </div>
        <Footer/>
        <FloatingActions/>
        <OrderModal/>
      </div>
    </Router>
  </OrderModalProvider>);
};

export default App;
