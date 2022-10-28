import { ActionType } from "../action-types";
import { itemState } from "../../types/itemTypes";
export declare const incrementQuantity: (payload: itemState) => {
    type: ActionType;
    payload: itemState;
};
export declare const decrementQuantity: (payload: itemState) => {
    type: ActionType;
    payload: itemState;
};
export declare const removeItem: (payload: itemState) => {
    type: ActionType;
    payload: itemState;
};
export declare const getData: (payload: itemState) => {
    type: ActionType;
    payload: itemState;
};
