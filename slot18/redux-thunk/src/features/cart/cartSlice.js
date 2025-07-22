import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.cart.find(p => p.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload;
      const existing = state.cart.find(item => item.id === id);
      if (existing && quantity > 0) {
        existing.quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  setProducts,
  addToCart,
  addProduct,
  updateCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
