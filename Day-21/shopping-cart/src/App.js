import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Product from './components/product/Product';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addCount = () =>{
    setCartCount(cartCount+1);
  }

  const reduceCount = () => {
    setCartCount(cartCount-1);
  }

  return (
    <div>
      <Navbar cartCount={cartCount}/>
      <HomePage/>
      <Product addCount={addCount} reduceCount={reduceCount}/>
      <Footer/>
    </div>
  );
}

export default App;
