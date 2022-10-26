import { itemState } from "../../types/itemTypes"
import { ActionType } from "../action-types"

interface IncrementAction {
  type: ActionType.INCREMENTQUANTITY
  payload: itemState
}

interface DecrementAction {
  type: ActionType.DECREMENTQUANTITY
  payload: itemState
}

interface RemoveAction {
  type: ActionType.REMOVEITEM
  payload: itemState
}

export type Action = IncrementAction | DecrementAction | RemoveAction