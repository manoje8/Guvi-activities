const Product = ({ product, eventHandler, productInCart }) => {
  return (
    <div className="col mb-4">
      <img src={product.images[0]} className="img" alt="..." />
      <p className="title">
        <b>{product.title}</b>
      </p>
      <p className="brand">Brand #{product.brand}</p>
      <p className="description">
        <span className="subtitle">Description: </span>
        {product.description}
      </p>
      <p className="rating">
        <span className="subtitle">Rating: </span>
        {product.rating}
      </p>
      <p className="price">$ {product.price}</p>
      <div id="btn-container">
        <button className="btn btn-outline-dark" onClick={() => eventHandler(product)}>
          {productInCart(product.id) ? "Remove from cart " : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
export default Product;
