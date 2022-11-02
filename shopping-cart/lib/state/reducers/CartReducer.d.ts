import { Action } from "../actions";
import { IItemState } from "src/types/types";
declare const reducer: (state: {
    data: never[];
    total: number;
} | undefined, action: Action) => {
    data: IItemState;
    total: number;
} | {
    data: IItemState[];
    total: number;
};
export default reducer;
