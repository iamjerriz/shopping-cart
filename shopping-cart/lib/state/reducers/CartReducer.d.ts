import { Action } from "../actions";
import { itemState } from "src/types/itemTypes";
declare const reducer: (state: {
    data: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        img: string;
    }[];
    total: number;
} | undefined, action: Action) => {
    data: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        img: string;
    }[];
    total: number;
} | {
    data: itemState;
    total: number;
};
export default reducer;
