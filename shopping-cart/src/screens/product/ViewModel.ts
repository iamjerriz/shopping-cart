import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store";

export interface Product {
    title: string;
    price: number;
    id: number;
    quantity: number;
    imgUrl: any;
}


const initialState: Product[] = [
    { id: 1, title: "Beer na Beer", price: 30.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg"},
    { id: 2, title: "Hunts Pork & Beans", price: 25.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg"},
    { id: 3, title: "Pinakurat Vinegar", price: 35.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg"},
    { id: 4, title: "Maja Blanca Mix", price: 25.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg"},
]

const ViewModel = createSlice({
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

export const { addProduct, removeProduct } = ViewModel.actions

export const getProductsSelector = (state: RootState) => state.products;

export default ViewModel.reducer