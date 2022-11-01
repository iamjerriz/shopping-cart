import { ActionType } from "../action-types"
import { iItemState } from "../../types/itemTypes"


export const incrementQuantity = (payload: iItemState) => {
  return {
    type: ActionType.INCREMENTQUANTITY,
    payload
  }
}

export const decrementQuantity = (payload: iItemState) => {
  return {
    type: ActionType.DECREMENTQUANTITY,
    payload
  }
}

export const removeItem = (payload: iItemState) => {
  return {
    type: ActionType.REMOVEITEM,
    payload
  }
}

export const getData = (payload: iItemState) => {
  return {
    type: ActionType.GETDATA,
    payload
  }
}