import { itemState } from '../types/itemTypes';
export default function useCartModel(): {
    useCartSelector: any;
    increment: (item: itemState) => void;
    decrement: (item: itemState) => void;
    removeItem: (item: itemState) => void;
    getData: (item: itemState) => void;
};
