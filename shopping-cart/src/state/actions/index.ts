import { iItemState } from "../../types/itemTypes"
import { ActionType } from "../action-types"

interface iIncrementAction {
  type: ActionType.INCREMENTQUANTITY
  payload: iItemState
}

interface iDecrementAction {
  type: ActionType.DECREMENTQUANTITY
  payload: iItemState
}

interface iRemoveAction {
  type: ActionType.REMOVEITEM
  payload: iItemState
}

interface iGetDataAction {
  type: ActionType.GETDATA
  payload: iItemState
}

export type Action = iIncrementAction | iDecrementAction | iRemoveAction | iGetDataAction