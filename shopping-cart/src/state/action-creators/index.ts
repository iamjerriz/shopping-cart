import { ActionType } from "../action-types"
import { IItemState } from "../../types/types"


export const incrementQuantity = (payload: IItemState) => {
  return {
    type: ActionType.INCREMENTQUANTITY,
    payload
  }
}

export const decrementQuantity = (payload: IItemState) => {
  return {
    type: ActionType.DECREMENTQUANTITY,
    payload
  }
}

export const removeItem = (payload: IItemState) => {
  return {
    type: ActionType.REMOVEITEM,
    payload
  }
}

export const getData = (payload: any[]) => {
  return {
    type: ActionType.GETDATA,
    payload
  }
}