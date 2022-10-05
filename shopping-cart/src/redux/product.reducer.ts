import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

export interface Product {
    name: string;
    price: number;
    id: number;
    quantity: number;
    imgUrl: any;
}

const initialState: any[] = [
    { id: 1, name: "Beer", price: 30.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg"},
    { id: 2, name: "Vinegar", price: 20.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg"},
    { id: 3, name: "Pork & Beans", price: 30.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg"},
    { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg"},
  ]

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