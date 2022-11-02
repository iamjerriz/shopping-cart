import { IItemState } from "../../types/types"
import { ActionType } from "../action-types"

interface TIncrementAction {
  type: ActionType.INCREMENTQUANTITY
  payload: IItemState
}

interface TDecrementAction {
  type: ActionType.DECREMENTQUANTITY
  payload: IItemState
}

interface TRemoveAction {
  type: ActionType.REMOVEITEM
  payload: IItemState
}

interface TGetDataAction {
  type: ActionType.GETDATA
  payload: IItemState
}

export type Action = TIncrementAction | TDecrementAction | TRemoveAction | TGetDataAction