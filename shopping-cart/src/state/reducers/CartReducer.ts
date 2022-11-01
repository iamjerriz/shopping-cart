import { ActionType } from "../action-types"
import { Action } from "../actions"
import { iItemState } from "src/types/types"


const dataModel = [{ id: 0, name: "sample name", price: 0, quantity: 0, img: "sample-image.jpg" },]

const getTotal = (value: typeof dataModel) => {
  return value.map(x => x.price * x.quantity).reduce((a: number, b: number) => a + b, 0)
}

const initialState = {
  data: dataModel,
  total: 0
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {

    case ActionType.GETDATA:
      return {
        ...state,
        data: action.payload
      }

    case ActionType.INCREMENTQUANTITY:
      console.log("new data", state.data)
      const increment = state.data.map(item => {
        if (item.id === action.payload.id) { item.quantity += 1 } return item
      })
      return {
        ...state,
        data: increment,
        total: getTotal(increment)
      }

    case ActionType.DECREMENTQUANTITY:
      const decrement = state.data.map(item => {
        if (item.id === action.payload.id) { item.quantity != 0 ? item.quantity -= 1 : item.quantity = 0 }
        return item
      })
      return {
        ...state,
        data: decrement,
        total: getTotal(decrement)
      }

    case ActionType.REMOVEITEM:
      const remove = state.data.map(item => {
        if (item.id === action.payload.id) { item.quantity != 0 ? item.quantity = 0 : item.quantity = item.quantity }
        return item
      })

      return {
        ...state,
        data: remove,
        total: getTotal(remove)
      }

    default:
      return state

  }
}

export default reducer