import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from './components/Products';
import Footer from './components/Footer';
import Product from './components/Product';
import Contact from './components/Contact';
import CustomProducts from './components/CustomProduct';
import Cart from './components/Cart';
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <header className="navbar colorDedo">
      <Link to="/">Art Store</Link>
      <nav>
        <div>
          <Link to="/home" >Home</Link>
          <Link to="/products" >Products</Link>
          <Link to="/custom" >Custom products</Link>
          <Link to="/cart" ><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart<span>{cart.length}</span></Link>
        </div>
      </nav>
      <Link className="contactmee" to="/contactus" > Contact Us</Link>
    </header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/skills" element={<Products />}></Route>
        <Route path="/custom" element={<CustomProducts />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
