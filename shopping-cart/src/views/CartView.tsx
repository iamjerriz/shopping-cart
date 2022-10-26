import React from "react";
import { Card } from "react-bootstrap";
import CustomButton from "../components/Button";
import { itemsState } from "../types/itemTypes";

interface Props {
    items: any[]
    btnFunction1: (event: any) => void;
    btnFunction2: (event: any) => void;
    btnText1?: string;
    btnText2?: string;
    showListMode: boolean;
}

export const CartView = ({ items, btnFunction1, btnFunction2, btnText1, btnText2, showListMode }: Props) => {

    console.log("showListMode", showListMode)
    return (
        <div>
            {
                showListMode != true ?
                    <div className="d-flex flex-wrap w-100">
                        {
                            items[0][0][0].map((product: itemsState) =>
                                <Card className="d-flex m-2 p-1" style={{ minWidth: "30%" }} key={product.id}>
                                    <Card.Img src={product.img} height="80px" width="80px" style={{ objectFit: "contain" }} />
                                    <Card.Body className="flex-column p-1">
                                        <div className="d-flex justify-content-between my-3">
                                            <span className="fs-.5">{product.name}</span>
                                            <span className="fs-.5 text-muted">₱ {product.price}</span>
                                        </div>

                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <CustomButton text={btnText1} onClickFunction={btnFunction1} param={product} />
                                            <span className="ml-4 mr-4 cart ">{product.quantity}</span>
                                            <CustomButton text={btnText2} onClickFunction={btnFunction2} param={product} />
                                        </div>
                                    </Card.Body >
                                </Card>
                            )
                        }
                    </div>
                    :
                    <div className="d-flex flex-column w-100">
                        {
                            items[0][0][0].map((product: itemsState) =>
                                <Card className={`d-flex flex-row justify-content-between p-2 m-2 ${product.quantity > 0 ? "" : "d-none"}`} style={{ minWidth: "150px" }}>
                                    <span className="fs-.5">{product.name}</span>
                                    <span className="ml-4 mr-4 cart ">{product.quantity}</span>
                                </Card>
                            )
                        }
                    </div>
            }
        </div>
    )
}

export default CartView

