import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import useCartModel from "src/model/userCartModel";
import { ProductButton } from "../components/productButton";
import { CustomButton } from "../components/customButton";
import { itemState, propTypes, items } from "../types/itemTypes";

export const CartView = ({ items, storeName, customBtnShow, customBtnText, customBtnFunc }: propTypes) => {

    const { increment, decrement, removeItem, getData, useCartSelector } = useCartModel()

    useEffect(() => {
        return getData(items[0]);
    }, [])

    return (
        <div className="d-flex">
            <div className="product-section">
                <h1 className="w-100">{storeName}</h1>
                {
                    items[0].map((product: itemState) =>
                        <Card className="product-cart" key={product.id}>
                            <Card.Img className="product-card-image" src={product.img} />
                            <Card.Body className="p-1">
                                <div className="d-flex justify-content-between my-3">
                                    <span className="fs-.5">{product.name}</span>
                                    <span className="fs-.5 text-muted">₱ {product.price}</span>
                                </div>

                                <div className="product-quantity-button">
                                    <ProductButton text={"-"} onClickFunction={decrement} param={product} />
                                    <span className="ml-4 mr-4 cart ">{product.quantity}</span>
                                    <ProductButton text={"+"} onClickFunction={increment} param={product} />
                                </div>
                            </Card.Body >
                        </Card>
                    )
                }
            </div>
            <div className="cart-section">
                <h1 className="mb-4">Your Cart</h1>
                <span>TOTAL: {useCartSelector.total}</span>
                {
                    items[0].map((product: itemState) =>
                        <Card className={`cart-card ${product.quantity > 0 ? "" : "d-none"}`} key={product.id}>
                            <span className="fs-.5 w-50">{product.name}</span>
                            <span className="ml-4 mr-4 cart ">{product.quantity}</span>
                            <ProductButton text={"X"} onClickFunction={removeItem} param={product} />
                        </Card>
                    )
                }
                {
                    customBtnShow == true &&
                    <div style={{ alignSelf: "center", alignItems: "center" }}>
                        <CustomButton text={customBtnText} onClickFunction={customBtnFunc} />
                    </div>
                }
            </div>
        </div>
    )
}

export default CartView
