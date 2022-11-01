import { iItemState } from "../../types/types";
import { ActionType } from "../action-types";
interface iIncrementAction {
    type: ActionType.INCREMENTQUANTITY;
    payload: iItemState;
}
interface iDecrementAction {
    type: ActionType.DECREMENTQUANTITY;
    payload: iItemState;
}
interface iRemoveAction {
    type: ActionType.REMOVEITEM;
    payload: iItemState;
}
interface iGetDataAction {
    type: ActionType.GETDATA;
    payload: iItemState;
}
export declare type Action = iIncrementAction | iDecrementAction | iRemoveAction | iGetDataAction;
export {};
