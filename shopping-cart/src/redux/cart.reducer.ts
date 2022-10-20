import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";


export interface Product {
    name: string;
    price: number;
    id: number;
    quantity: number;
    imgUrl: any;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as Product[],
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const productIndex = state.findIndex(product => product.id === action.payload.id);
                if (productIndex !== -1) {
                    state[productIndex].quantity += 1;
                } else {
                    return [ ...state, {...action.payload, quantity: 1}]
                }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex(product => product.id === action.payload);
                if (state[productIndex].quantity > 1) {
                    state[productIndex].quantity -= 1;
                } else {
                    return state.filter(product => product.id !== action.payload)
                }
        }
    }
})
export const getCartProduct = (state: RootState) => state.cart;
export const getTotalPrice = (state: RootState) => state.cart.reduce((acc, next) => acc += (next.quantity * next.price) ,0)

export const { addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;