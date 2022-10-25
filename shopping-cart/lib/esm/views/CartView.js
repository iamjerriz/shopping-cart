import React from "react";
import { Card } from "react-bootstrap";
import CustomButton from "../components/Button";
export const CartView = ({ items, btnFunction1, btnFunction2, btnText1, btnText2, showListMode }) => {
    console.log("showListMode", showListMode);
    return (React.createElement("div", null, showListMode != true ?
        React.createElement("div", { className: "d-flex flex-wrap w-100" }, items[0][0][0].map((product) => React.createElement(Card, { className: "d-flex m-2 p-1", style: { minWidth: "20%" }, key: product.id },
            React.createElement(Card.Img, { src: product.img, height: "80px", width: "80px", style: { objectFit: "contain" } }),
            React.createElement(Card.Body, { className: "flex-column p-1" },
                React.createElement("div", { className: "d-flex justify-content-between my-3" },
                    React.createElement("span", { className: "fs-.5" }, product.name),
                    React.createElement("span", { className: "fs-.5 text-muted" },
                        "\u20B1 ",
                        product.price)),
                React.createElement("div", { className: "d-flex flex-row justify-content-between align-items-center" },
                    React.createElement(CustomButton, { text: btnText1, onClickFunction: btnFunction1, param: product }),
                    React.createElement("span", { className: "ml-4 mr-4 cart " }, product.quantity),
                    React.createElement(CustomButton, { text: btnText2, onClickFunction: btnFunction2, param: product }))))))
        :
            React.createElement("div", { className: "d-flex flex-column w-100" }, items[0][0][0].map((product) => React.createElement(Card, { className: "d-flex flex-row justify-content-between p-2 m-2", style: { minWidth: "150px" } },
                React.createElement("span", { className: "fs-.5" }, product.name),
                React.createElement("span", { className: "ml-4 mr-4 cart " }, product.quantity))))));
};
export default CartView;
