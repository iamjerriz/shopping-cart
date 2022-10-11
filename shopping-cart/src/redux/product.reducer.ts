import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

export interface Product {
    name: string;
    price: number;
    id: number;
    quantity: number;
    imgUrl: any;
}

const initialState: any[] = []

const product = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return [action.payload, ...state]
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            return state.filter(product => product.id !== action.payload)
        }
    }
})

export const { addProduct, removeProduct } = product.actions

export const getProductsSelector = (state: RootState) => state.products;

export default product.reducer