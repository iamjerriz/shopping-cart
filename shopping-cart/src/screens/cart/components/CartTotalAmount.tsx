import React from 'react'
import { useAppSelector } from '../../../hooks/store.hooks'
import { getTotalPrice } from '../cart.reducer'

function CartTotalAmount() {

  const totalPrice = useAppSelector(getTotalPrice)

  return (
    <h5>Total: {totalPrice}</h5>
  )
}

export default CartTotalAmount