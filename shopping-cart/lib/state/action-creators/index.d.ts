import { ActionType } from "../action-types";
import { iItemState } from "../../types/types";
export declare const incrementQuantity: (payload: iItemState) => {
    type: ActionType;
    payload: iItemState;
};
export declare const decrementQuantity: (payload: iItemState) => {
    type: ActionType;
    payload: iItemState;
};
export declare const removeItem: (payload: iItemState) => {
    type: ActionType;
    payload: iItemState;
};
export declare const getData: (payload: iItemState) => {
    type: ActionType;
    payload: iItemState;
};
