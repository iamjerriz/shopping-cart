import { configureStore } from "@reduxjs/toolkit";
import products from './screens/product/ViewModel'
import cart from './screens/cart/CartSlice'

const store = configureStore({
    reducer: {
        products,
        cart
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;