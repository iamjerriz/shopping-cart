# Shopping Cart With TS and Redux

A prototype of shopping cart using typescript and redux

## Installation

npm i shopping-cart-mvvm-ts-redux-v2

## Screenshots

![App Screenshot](https://i.ibb.co/PhmDrMz/ccc.png)

## Documentation

textProp = Property of object to display text for buttons

as

## Products Data Model

name : string

price : number

id : number

quantity : number

imgUrl : any

## Usage/Examples

```javascript
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/store.hooks";
import { getCartProduct, getTotalPrice, removeFromCart } from "../redux/cart.reducer";

export default function CartListModel() {
  const dispatch = useDispatch();

  const getCartProducts = useAppSelector(getCartProduct);

  const getCartPrice = useAppSelector(getTotalPrice);

  const handleRemoveFromCart = (productId: number) => dispatch(removeFromCart(productId));

  return {
    getCartProducts,
    getCartPrice,
    handleRemoveFromCart,
  };
}
```

```javascript
import React from "react";
import { Button } from "react-bootstrap";
import UseViewModel from "../../../model/cartListModel";

function CartProducts() {
  const { handleRemoveFromCart, getCartProducts } = UseViewModel();

  return (
    <>
      {getCartProducts.map((product) => (
        <div className="d-flex justify-content-evenly mb-4" key={product.id}>
          <span style={{ minWidth: "135px" }}>{product.name}</span>
          <span>{product.amount}</span>
          <Button onClick={() => handleRemoveFromCart(product.id)} variant="danger">
            Remove From Cart
          </Button>
        </div>
      ))}
    </>
  );
}
```

```javascript
import React from "react";
import CartProducts from "./components/CartProducts";
import CartTotalAmount from "./components/CartTotalAmount";

function Cart() {
  return (
    <div className="w-50 text-center">
      <h1>Cart</h1>
      <CartTotalAmount />
      <CartProducts />
    </div>
  );
}

export default Cart;
```
