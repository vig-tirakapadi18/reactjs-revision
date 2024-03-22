import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQty: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQty++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    qty: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
            } else {
                existingItem.qty++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQty--;

            if (existingItem.qty === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.qty--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;