import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        clearCart : () => {
            state.items = [];
        },
        removeItem : () => {
            state.items.pop();
        }
    }
});


export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;