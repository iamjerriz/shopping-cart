import React from 'react'
import { Button } from 'react-bootstrap'
import UseViewModel from '../../../model/cartListModel'

function CartProducts() {

  const { handleRemoveFromCart, getCartProducts } = UseViewModel();
  
  return (
    <>
      {
        getCartProducts.map(product => (
            <div className="d-flex justify-content-evenly mb-4" key={product.id}>
                <span style={{minWidth: "135px"}}>{product.name}</span>
                <span>{product.amount}</span>
                <Button onClick={() => handleRemoveFromCart(product.id)} variant="danger" >
                  Remove From Cart
                </Button>
            </div>
        ))
    }
    </>
      
  )
}

export default CartProducts