import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import UseViewModel from "../../model/productListModel";
import { Product } from "../../redux/product.reducer";

interface Props {
    items: any[]
    title: string
  }
  
export const ProductView = ({items, title}: Props) => {
    const { handleRemoveFromCart, handleAddToCart, getCartProducts, getCartPrice } = UseViewModel();


    useState([{items}]);

    console.log("prods",items)
    return (
        <div className="text-center w-100">
            <h1>{title}</h1>
        <div className="d-flex text-center w-100">
            <div className="d-flex flex-wrap">
                {
                    items[0][0][0].map((product: Product) => 
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
                                    <span className="fs-.5">{product.name}</span>
                                    <span className="ms-2 text-muted">₱ {product.price}</span>
                                </Card.Title>

                                <div className="d-flex flex-row justify-content-between w-100">
                                    <Button className="w-10 col-4" onClick={() => handleAddToCart(product)}>+</Button>
                                    {
                                        getCartProducts.length > 0 ? getCartProducts.map(cart =>
                                            <span className={`ml-4 mr-4 cart ${cart.id != product.id ? "d-none" : ""}`}>
                                                {cart.id == product.id ? cart.amount > 0 ? cart.amount : "" : ""}
                                            </span>
                                        )
                                    :""}
                                    <Button className="w-10 col-4" onClick={() => handleRemoveFromCart(product.id)}>-</Button>
                                </div>
                            </Card.Body >
                        </Card>
                    )
                }
            </div>

            <div className="w-50 text-center">
                <h3>Cart</h3>
                <h5>Total: {getCartPrice}</h5>
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
            </div>
        </div>
    </div>
    )
}

export default ProductView

