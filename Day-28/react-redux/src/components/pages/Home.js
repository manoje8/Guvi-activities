import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../../store/ProductSlice";

// Components
import Product from "../Product";
// UI

import Cards from "../UI/card/Cards";
// Data

import Products from "../../data/Products";
import "./Home.css";

const Home = () => {
  const cartProduct = useSelector((state) => state.cart);
  const { products } = cartProduct;
  const dispatch = useDispatch();


  //Check added product in the cart
  const isProductInCart = (id) => {
    return products.some((product) => product.id === id);
  };

  //add and delete product by isProductInCart function
  const eventHandler = (product) => {
    try {
      if (!isProductInCart(product.id)) {
        dispatch(addCart(product));
      } else {
        dispatch(deleteCart(product.id));
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div>
      <div className="home-container">
        <h1>Shop in style</h1>
        <h4>Welcome to the online shopping</h4>
      </div>
      <Cards>
        {Products.map((product, id) => (
          <Product
            key={id}
            product={product}
            eventHandler={eventHandler}
            productInCart={isProductInCart}
          />
        ))}
      </Cards>
    </div>
  );
};

export default Home;
