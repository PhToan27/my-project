import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload;
      const existing = state.cart.find(item => item.id === id);
      if (existing) {
        existing.quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
