import { createSlice } from '@reduxjs/toolkit';

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        item => item.productId === product.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * product.price;
      } else {
        const timeId = generateId();
        const totalPrice = quantity * product.price;

        state.cartItems.push({
          id: timeId,
          productId: product.id,
          quantity,
          totalPrice,
        });
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId
      );
    },
  },
});

export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartItem) => {
    return cartItem.totalPrice + total;
  }, 0);
};

export const getCartItems = state => state.cart.cartItems;

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
