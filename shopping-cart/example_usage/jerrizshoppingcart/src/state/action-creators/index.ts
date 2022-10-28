import { ActionType } from "../action-types"
import { itemState } from "../../types/itemTypes"


// export const incrementQuantity = (payload: itemState) => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.INCREMENTQUANTITY,
//       payload
//     })
//   }
// }

// export const decrementQuantity = (payload: itemState) => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.DECREMENTQUANTITY,
//       payload
//     })
//   }
// }

export const incrementQuantity = (payload: itemState) => {
  return {
    type: ActionType.INCREMENTQUANTITY,
    payload
  }
}

export const decrementQuantity = (payload: itemState) => {
  return {
    type: ActionType.DECREMENTQUANTITY,
    payload
  }
}

export const removeItem = (payload: itemState) => {
  return {
    type: ActionType.REMOVEITEM,
    payload
  }
}

export const getData = (payload: itemState) => {
  return {
    type: ActionType.GETDATA,
    payload
  }
}