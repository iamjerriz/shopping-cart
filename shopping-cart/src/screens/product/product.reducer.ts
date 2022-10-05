import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store";
import item from "../../data/data.json"

export interface Product {
    name: string;
    price: number;
    id: number;
    quantity: number;
    imgUrl: any;
}

const items = item

const initialState: any[] = items

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