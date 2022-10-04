import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { addToCart, getCartProduct, removeFromCart } from "../Cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../hooks/store.hooks";
import { getProductsSelector, Product,  } from "./products.slice";

const ProductsList: React.FC = () => {

    const Products = useSelector(getProductsSelector)

    const cartProducts = useAppSelector(getCartProduct)
    
    const dispatch = useAppDispatch()


    const addToCartHandler = (product: Product) => dispatch(addToCart(product))
    const handleRemoveFromCart = (productId: number) => dispatch(removeFromCart(productId))

    return (
        <div className="w-50 text-center">
            <h1>Product List</h1>
                <div className="d-flex flex-wrap">
                    {
                        Products.map(product => 
                            <Card className="d-flex bg-white shadow-sm mb-3 col-3" style={{width: "45%", margin: "2%"}}>
                                <Card.Img 
                                    variant="top" 
                                    src={product.imgUrl} 
                                    height="100px"
                                    width="100px"
                                    style={{ objectFit: "contain" }}
                                />

                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="d-flex flex-row justify-content-between align-items-baseline mb-4">
                                        <span className="fs-.5">{product.title}</span>
                                        <span className="ms-2 text-muted">₱ {product.price}</span>
                                    </Card.Title>
                                    <div className="d-flex flex-row justify-content-between w-100">
                                        <Button className="col-4" onClick={() => addToCartHandler(product)}>+</Button>
                                        {
                                            cartProducts.map(cart =>
                                                <span className="ml-4 mr-4">{cart.id == product.id ? cart.amount : null}</span>
                                        )}
                                        <Button className="col-4" onClick={() => handleRemoveFromCart(product.id)} variant="danger">-</Button>
                                    </div>
                                </Card.Body >
                            </Card>
                        )
                    }
            </div>
        </div>
    )
}

export default ProductsList