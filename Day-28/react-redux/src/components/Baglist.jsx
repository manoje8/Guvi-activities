import { useState } from "react";
import { updateCart, deleteCart } from "../store/ProductSlice";
import { useDispatch } from "react-redux";

const Baglist = ({ product }) => {
  const dispatch = useDispatch();

  //cart product count state
  const [quantity, setQuantity] = useState(1);

  const productQuantity = ({ target: { name } }, selectedProduct) => {
    if (name === "plus" && product.stock > quantity) 
    {
      setQuantity(quantity + 1);
      const updatedQuantity = quantity + 1;
      dispatch(updateCart({ name, quantity: updatedQuantity, selectedProduct }));
    } else if (name === "minus" && quantity > 1) 
    {
      setQuantity(quantity - 1);
      const updatedQuantity = quantity - 1;
      dispatch(updateCart({ name, quantity: updatedQuantity, selectedProduct }));
    }
  };

  return (
    <ul className="baglist">
      <li className="baglist-item">
        <div className="baglist-item-selected">
          <div className="baglist-item-selected-column image-column">
            <img src={product.thumbnail} alt="" aria-hidden="true" />
          </div>
          <div className="baglist-item-selected-column">
            <div className="column-wrapper central-info">
              <div className="column-seperator">
                <h3 className="item-title">{product.title}</h3>
                <div className="baglist-item-brand">
                  Brand
                  <span># {product.brand}</span>
                </div>
                <ul className="baglist-item-properties">
                  <li>
                    <span className="property-name">description</span>:
                    <span>{product.description}</span>
                  </li>
                </ul>
              </div>
              <div className="footer-item">
                <div className="availability">
                  <div className="shipping-info">
                    <p className="title">AVAILABLE</p>
                    <div className="subtitle">
                      Your selection is available for immediate purchase online.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-wrapper item-price-quantity">
              <div className="baglist-order-info">
                <div className="quantity">
                  <div className="product-quantity">
                    <button name="minus" className="minus-button" onClick={(e) => productQuantity(e, product)}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button name="plus" className="plus-button" onClick={(e) => productQuantity(e, product)}>
                      +
                    </button>
                  </div>
                </div>
                <span className="baglist-item-price">
                  <span className="baglist-total-price" dir="ltr">
                    $ {isNaN(product.qPrice) ? product.price : product.qPrice}
                  </span>
                  <span className="price-label"></span>
                </span>
              </div>
            </div>
            <div className="footer-item">
              <div className="baglist-item-actions">
                <button
                  className="remove-button" type="button" onClick={() => dispatch(deleteCart(product.id))}>
                  <span>Remove</span>
                </button>
                <span className="item-stock" type="button">
                  <span>Stock left :{product.stock}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Baglist;
