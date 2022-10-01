import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

export interface Product {
    title: string;
    price: number;
    id: number;
}


const initialState: Product[] = [
    { title: "Ragnarok", price: 99, id: 1 },
    { title: "Tekken", price: 199, id: 2 },
    { title: "GTA V", price: 299, id: 3 },
]

const productsSlice = createSlice({
    name: 'pdoructs',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return [action.payload, ...state]
        }
    }
})

export const { addProduct } = productsSlice.actions

export const getProductsSelector = (state: RootState) => state.products;

export default productsSlice.reducer