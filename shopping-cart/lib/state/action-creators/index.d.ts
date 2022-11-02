import { ActionType } from "../action-types";
import { IItemState } from "../../types/types";
export declare const incrementQuantity: (payload: IItemState) => {
    type: ActionType;
    payload: IItemState;
};
export declare const decrementQuantity: (payload: IItemState) => {
    type: ActionType;
    payload: IItemState;
};
export declare const removeItem: (payload: IItemState) => {
    type: ActionType;
    payload: IItemState;
};
export declare const getData: (payload: any[]) => {
    type: ActionType;
    payload: any[];
};
