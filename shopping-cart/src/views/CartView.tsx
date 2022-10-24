import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import CustomButton from "../components/Button";
import { itemsState } from "../types/itemTypes";

interface Props {
    items: any[]
    btnFunction1: (event: any) => void;
    btnFunction2: (event: any) => void;
    btnText1: string;
    btnText2: string;
}

export const CartView = ({ items, btnFunction1, btnFunction2, btnText1, btnText2 }: Props) => {

    useState([{ items }]);
    console.log("mini-app-items", items)

    return (
        <div className="text-center w-100">
            <h1>Shopping Cart</h1>
            <div className="d-flex flex-wrap w-100">
                {
                    items[0].map((product: itemsState) =>
                        <Card
                            className="d-flex bg-white shadow-sm m-2 col-2 p-1"
                            style={{ minWidth: "30%" }}
                            key={product.id}>
                            <Card.Img
                                className="p-1"
                                variant="top"
                                src={product.img}
                                height="100px"
                                width="100px"
                                style={{ objectFit: "contain" }}
                            />
                            <Card.Body className="d-flex flex-column p-1">

                                <Card.Title className="d-flex flex-row justify-content-between my-3">
                                    <span className="fs-.5">{product.name}</span>
                                    <span className="ms-2 text-muted">₱ {product.price}</span>
                                </Card.Title>

                                <div className="d-flex flex-row justify-content-between">
                                    <CustomButton text={btnText1} onClickFunction={btnFunction1} param={undefined} />
                                    <span className="ml-4 mr-4 cart ">{product.quantity}</span>
                                    <CustomButton text={btnText2} onClickFunction={btnFunction2} param={undefined} />

                                </div>
                            </Card.Body >
                        </Card>
                    )
                }
            </div>
        </div>
    )
}

export default CartView

