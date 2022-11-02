import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import useCartModel from "src/model/useCartViewModel";
import { ProductButton } from "../components/productButton";
import { CustomButton } from "../components/customButton";
import { IItemState, IShoppingCartProps } from "../types/types";

export const CartView = ({ items, customBtnShow, customBtnText, customBtnFunc }: IShoppingCartProps) => {

    const { increment, decrement, removeItem, getData, cartSelector } = useCartModel()

    useEffect(() => {
        return getData(items[0]);
    }, [])

    return (
        <div className="d-flex">
            <div className="cart-section">
                <h1 className="mb-4">Your Cart</h1>
                <span>TOTAL: {cartSelector.total}</span>
                {
                    cartSelector.data.map((product: IItemState) =>
                        <Card className={`cart-card ${product.quantity > 0 ? "" : ""}`} key={product.id}>

                            <Card.Img className="cart-image" src={product.img} />

                            <div className="cart-name-price">
                                <span className="cart-name">{product.name}</span>
                                <span className="cart-price">₱ {product.price}</span>
                            </div>

                            <span className="cart-quantity">x {product.quantity}</span>

                            <div className="cart-buttons">
                                <ProductButton text={"Remove"} onClickFunction={removeItem} param={product} />
                                <div className="cart-quantity-button">
                                    <ProductButton text={"-"} onClickFunction={decrement} param={product} />
                                    <span className="cart-quantity">{product.quantity}</span>
                                    <ProductButton text={"+"} onClickFunction={increment} param={product} />
                                </div>
                            </div>

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
