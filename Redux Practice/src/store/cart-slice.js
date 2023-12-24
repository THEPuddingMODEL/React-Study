import { createSlice } from "@reduxjs/toolkit";

//const initialCartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    // how to we know which one to increment?
    // by index? Pass in index through action payload

    // ation payload need be object
    addToCart(state, action) {
      // need to push action payload into the array

      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++
      // we directly modified the array, this is strictly prohibited in Redux
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name:newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },

    // given id
    removeItemFromCart(state, action){
        const id = action.payload
        const existingItem = state.items.find(item=>item.id === id)

        state.totalQuantity--

        if(existingItem.quantity === 1){
            state.items = state.items.filter(item=>item.id !== id)
        } else {
            existingItem.quantity--
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price
        }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
