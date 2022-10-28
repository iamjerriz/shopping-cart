import { useState } from "react"
import { ActionType } from "../action-types"
import { Action } from "../actions"

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
        if (cart_item.id === action.payload.id) { cart_item.quantity != 0 ? cart_item.quantity -= 1 : cart_item.quantity = 0 }
        return cart_item
      })
      return {
        ...state,
        data: decrement,
        total: getTotal(decrement)
      }

    case ActionType.REMOVEITEM:
      const remove = state.data.map(cart_item => {
        if (cart_item.id === action.payload.id) { cart_item.quantity != 0 ? cart_item.quantity = 0 : cart_item.quantity = cart_item.quantity }
        return cart_item
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