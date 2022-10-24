import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import CustomButton from "../components/Button";
import { itemsState } from "../types/itemTypes";

export interface propTypes {
    items: itemsState[];
    titleProp: string;
    keyProp: string;
    showRemoveButton?: boolean;
}

interface Props {
    items: any[]
    btnFunction1: (event: any) => void;
    btnFunction2: (event: any) => void;
    btnText1: string;
    btnText2: string;
}

export const CartView = ({ items, btnFunction1, btnFunction2, btnText1, btnText2 }: Props) => {

    useState([{ items }]);

    return (
        <div className="text-center w-100">
            <h1>Shopping Cart</h1>
            <div className="d-flex text-center w-100">
                <div className="d-flex flex-wrap">
                    {
                        items[0].map((product: itemsState) =>
                            <Card className="d-flex bg-white shadow-sm mb-3 col-3  p-4" style={{ width: "45%", margin: "2%", minWidth: "375px" }} key={product.id}>
                                <Card.Img
                                    variant="top"
                                    src={product.img}
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
                                        <CustomButton text={btnText1} onClickFunction={btnFunction1} param={undefined} />
                                        <span className="ml-4 mr-4 cart ">{product.quantity}</span>
                                        <CustomButton text={btnText2} onClickFunction={btnFunction2} param={undefined} />

                                    </div>
                                </Card.Body >
                            </Card>
                        )
                    }
                </div>

                {/* <div className="w-50 text-center">
                <h3>Cart</h3>
                <h5>Total: {getCartPrice}</h5>
                    {
                        getCartProducts.map(product => (
                            <div className="d-flex justify-content-evenly mb-4" key={product.id}>
                                <span style={{minWidth: "135px"}}>{product.name}</span>
                                <span>{product.quantity}</span>
                                <Button onClick={() => handleRemoveFromCart(product.id)} variant="danger" >
                                Remove From Cart
                                </Button>
                            </div>
                        ))
                    }
            </div> */}
            </div>
        </div>
    )
}

export default CartView

