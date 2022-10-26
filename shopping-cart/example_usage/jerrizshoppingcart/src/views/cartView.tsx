import React, { useState } from "react";
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
          btnFunction2={decrement}
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
        // cartBtnFunction={removeItem}
        />
      </div>
    </div>
  )
}

export default CartView

