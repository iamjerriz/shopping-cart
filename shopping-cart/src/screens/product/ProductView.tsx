import React from "react";
import { Card } from "react-bootstrap";
import { ProductButton } from "./components/ProductButton";
import UseViewModel from "../../model/productListModel";

const ProductView: React.FC = () => {
    const { handleRemoveFromCart, handleAddToCart, getProducts, getCartProducts } = UseViewModel();

    return (
        <div className="w-50 text-center">
            <h1>Product List</h1>
                <div className="d-flex flex-wrap">
                    {
                        getProducts.map(product => 
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
                                        <span className="col-4" onClick={() => handleAddToCart(product)}>
                                            <ProductButton text="+"/>
                                        </span>
                                        {
                                            getCartProducts.length > 0 ? getCartProducts.map(cart =>
                                                <span className={`ml-4 mr-4 cart ${cart.id != product.id ? "d-none" : ""}`}>
                                                    {cart.id == product.id ? cart.amount > 0 ? cart.amount : "0" : ""}
                                                </span>
                                            )
                                        :0}
                                        <span className="col-4" onClick={() => handleRemoveFromCart(product.id)}>
                                            <ProductButton text="-"/>
                                        </span>
                                    </div>

                                </Card.Body >
                            </Card>
                        )
                    }
            </div>
        </div>
    )
}

export default ProductView

