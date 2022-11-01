import { iItemState } from '../types/types';
export default function useCartViewModel(): {
    cartSelector: any;
    increment: (item: iItemState) => void;
    decrement: (item: iItemState) => void;
    removeItem: (item: iItemState) => void;
    getData: (item: iItemState) => void;
};
