import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/store.hooks'
import { getCartProduct, getTotalPrice, removeFromCart } from '../redux/cart.reducer'

export default function CartListModel() {

  const dispatch = useDispatch()

  const getCartProducts = useAppSelector(getCartProduct)

  const getCartPrice = useAppSelector(getTotalPrice)
  
  const handleRemoveFromCart = (productId: number) => dispatch(removeFromCart(productId))

  return {
    getCartProducts,
    getCartPrice,
    handleRemoveFromCart,
  }
}

