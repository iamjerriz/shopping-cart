import React from 'react'
import CartProducts from './components/CartProducts'
import CartTotalAmount from './components/CartTotalAmount'

function Cart() {
  return (
    <div className="w-50 text-center">
            <h1>Cart</h1>
            <CartTotalAmount/>
            <CartProducts/>
        </div>
  )
}

export default Cart


