//Providers
import ProductProvider from './context/Product';
//Components
import Header from './components/Header';
import Products from './components/Products';
//style
import './App.css';

function App() {
  return (
    <>
      <Header />
      <ProductProvider>
        <Products />
      </ProductProvider>
    </>
  );
}

export default App;
