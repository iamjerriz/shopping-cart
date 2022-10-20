import { useAppDispatch, useAppSelector } from '../hooks/store.hooks'
import { getCartProduct, addToCart, removeFromCart, getTotalPrice, Product } from '../redux/cart.reducer'

export default function ProductListModel() {

  const dispatch = useAppDispatch()


  const getCartProducts = useAppSelector(getCartProduct)
  
  const getCartPrice = useAppSelector(getTotalPrice)

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product))
  }
  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId))
  }

  return {
    getCartProducts,
    handleAddToCart,
    handleRemoveFromCart,
    getCartPrice,
  }
}

