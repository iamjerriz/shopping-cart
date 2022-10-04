import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/store.hooks'
import { getCartProduct, getTotalPrice, removeFromCart } from './CartSlice'


interface CartProps {

}

const Cart: React.FC = () => {

    const cartProducts = useAppSelector(getCartProduct)
    const totalPrice = useAppSelector(getTotalPrice)
    
    const dispatch = useDispatch()

    const handleRemoveFromCart = (productId: number) => dispatch(removeFromCart(productId))

    return(
        <div className="w-50 text-center">
            <h1>Cart</h1>
            <h5>Total: {totalPrice}</h5>
            {
                cartProducts.map(product => (
                    <div className="d-flex justify-content-evenly mb-4" key={product.id}>
                        <span>{product.title}</span>
                        <span>{product.amount}</span>
                        <Button onClick={() => handleRemoveFromCart(product.id)} variant="danger" >Remove From Cart</Button>
                    </div>
                ))
            }
        </div>
    );
}

export default Cart

