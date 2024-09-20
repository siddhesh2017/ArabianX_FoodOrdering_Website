import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});
export default store;

//npm install @reduxjs/toolkit
//npm install react-redux