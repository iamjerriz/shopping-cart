import { Action } from "../actions";
import { iItemState } from "src/types/types";
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
    data: iItemState;
    total: number;
};
export default reducer;
