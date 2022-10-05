import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../hooks/store.hooks'
import { getCartProduct, addToCart, removeFromCart } from '../redux/cart.reducer'
import { getProductsSelector, Product} from '../redux/product.reducer'

export default function ProductListModel() {

  const dispatch = useAppDispatch()
  
  const getProducts = useSelector(getProductsSelector)

  const getCartProducts = useAppSelector(getCartProduct)

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product))
  }
  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId))
  }

  return {
    getProducts,
    getCartProducts,
    handleAddToCart,
    handleRemoveFromCart
  }
}
