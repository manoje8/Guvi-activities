import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.products.push(payload);
    },
    updateCart: (state, action) => {
      //Destruction
      const { name, quantity, selectedProduct } = action.payload;
      const { id, price, stock } = selectedProduct;

      // Create a new array with updated products
      let updateProduct = state.products.map((product) => {
        if (product.id === id) {
          if (name === "plus") {
            return { ...product, qPrice: price * quantity, stock: stock - 1 };
          } else if (name === "minus") {
            return { ...product, qPrice: price * quantity, stock: stock + 1 };
          }
        }
        return product; // Return unchanged product for other items
      });
      return { ...state, products: updateProduct };
    },
    deleteCart: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
  },
});

export const { addCart, updateCart, deleteCart } = ProductSlice.actions;
export default ProductSlice.reducer;
