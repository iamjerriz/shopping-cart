import { IItemState } from '../types/types';
export default function useCartViewModel(): {
    cartSelector: any;
    increment: (item: IItemState) => void;
    decrement: (item: IItemState) => void;
    removeItem: (item: IItemState) => void;
    getData: (item: any[]) => void;
};
