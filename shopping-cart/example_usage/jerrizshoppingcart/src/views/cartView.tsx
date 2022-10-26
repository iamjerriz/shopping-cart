import React from "react";
import { Card } from "react-bootstrap";
import { CartComponent } from 'riz-shoppingcart-v3';
import useCartModel from "../model/userCartModel";

export const CartView = () => {

  const { increment, decrement, removeItem, useCartSelector } = useCartModel()

  return (
    <div className="d-flex">
      <div className="w-100">
        <CartComponent
          items={[useCartSelector.data]}
          btnFunction1={increment}
          btnFunction2={removeItem}
          btnText1={"+"}
          btnText2={"-"}
          showListMode={false}
        />
      </div>

      <div className="w-100">
        <span>TOTAL: {useCartSelector.total}</span>
        <CartComponent
          items={[useCartSelector.data]}
          btnFunction1={increment}
          btnFunction2={decrement}
          showListMode={true}
          btnText1={''}
          btnText2={''}
        />
      </div>
    </div>
  )
}

export default CartView

