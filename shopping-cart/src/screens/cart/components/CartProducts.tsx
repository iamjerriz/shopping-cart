import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../hooks/store.hooks'
import { getCartProduct, removeFromCart } from '../cart.reducer'

function CartProducts() {

  const cartProducts = useAppSelector(getCartProduct)

  const dispatch = useDispatch()

  const handleRemoveFromCart = (productId: number) => dispatch(removeFromCart(productId))
  
  return (
    <>
      {
        cartProducts.map(product => (
            <div className="d-flex justify-content-evenly mb-4" key={product.id}>
                <span style={{minWidth: "135px"}}>{product.name}</span>
                <span>{product.amount}</span>
                <Button onClick={() => handleRemoveFromCart(product.id)} variant="danger" >Remove From Cart</Button>
            </div>
        ))
    }
    </>
      
  )
}

export default CartProducts