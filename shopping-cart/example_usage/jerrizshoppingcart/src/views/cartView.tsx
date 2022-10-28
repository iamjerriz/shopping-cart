import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { CartComponent } from 'riz-shoppingcart-v4';
import useCartModel from "../model/userCartModel";


export const CartView = () => {

  const { increment, decrement, removeItem, useCartSelector } = useCartModel()

  const items = ([
    { id: 1, name: "Beer", price: 1.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg" },
    { id: 2, name: "Vinegar", price: 21.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg" },
    { id: 3, name: "Pork & Beans", price: 20.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg" },
    { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg" }
  ]);

  return (
    <div className="d-flex">
      <div className="w-100">
        <CartComponent items={[items]} />
      </div>
      <div className="w-100">
        <CartComponent items={[items]} cartMode={true} />
      </div>
    </div>
  )
}

export default CartView

