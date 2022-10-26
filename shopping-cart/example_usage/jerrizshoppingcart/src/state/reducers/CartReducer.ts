import { ActionType } from "../action-types"
import { Action } from "../actions"


const dataItems = [
  { id: 1, name: "Beer", price: 1.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg" },
  { id: 2, name: "Vinegar", price: 21.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg" },
  { id: 3, name: "Pork & Beans", price: 20.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg" },
  { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg" }
]

const getTotal = (value: typeof dataItems) => {
  console.log("value", value)
  return value.map(x => x.price * x.quantity).reduce((a: number, b: number) => a + b, 0)
}

const initialState = {
  data: dataItems,
  total: getTotal(dataItems)
}


const reducer = (state = initialState, action: Action) => {
  switch (action.type) {

    case ActionType.INCREMENTQUANTITY:
      const increment = state.data.map(cart_item => {
        if (cart_item.id === action.payload.id) { cart_item.quantity += 1 } return cart_item
      })
      return {
        ...state,
        data: increment,
        total: getTotal(increment)
      }

    case ActionType.DECREMENTQUANTITY:
      const decrement = state.data.map(cart_item => {
        if (cart_item.id === action.payload.id) { cart_item.quantity -= 1 } return cart_item
      })

      return {
        ...state,
        data: decrement,
        total: getTotal(decrement)
      }

    case ActionType.REMOVEITEM:
      const remove = state.data.filter((cart_item) => cart_item.id !== action.payload.id)

      return {
        ...state,
        data: remove,
        total: getTotal(remove)
      }

    // case ActionType.WITHDRAW:
    //   return state - action.payload

    // case ActionType.BANKRUPT:
    //   return 0

    default:
      return state

  }
}

export default reducer