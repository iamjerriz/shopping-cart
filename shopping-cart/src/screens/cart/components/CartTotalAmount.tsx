import React from 'react'
import UseViewModel from '../../../model/cartListModel'

function CartTotalAmount() {

  const { getCartPrice } = UseViewModel();

  return (
    <h5>Total: {getCartPrice}</h5>
  )
}

export default CartTotalAmount