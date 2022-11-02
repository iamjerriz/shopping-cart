# Shopping Cart With TS and Redux

A prototype of shopping cart using typescript and redux

## Installation

npm i riz-shoppingcart-v7

## Documentation

items  =  array of products to display 

storeName  =  show custom store name

customBtnShow  =  show custom button below added cart items

customBtnFunc  =  add function for custom button

customBtnText  =  custom button text

## Props

items =  array

customBtnShow  =  bolean

customBtnFunc  =  function

customBtnText  =  string


## Items Data Model

name : string

price : number

id : number

quantity : number

img : any

## Screenshots

![App Screenshot](https://i.ibb.co/RHJDv5z/vvv.png)


## Usage/Examples

```javascript
import React, { useState } from 'react';
import CartComponent from 'riz-shoppingcart-v7';
import './App.css';

function App() {

  const [products, setCart] = useState([
    { id: 1, name: "Beer", price: 1.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg" },
    { id: 2, name: "Vinegar", price: 21.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg" },
    { id: 3, name: "Pork & Beans", price: 20.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg" },
    { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg" },
    { id: 5, name: "Cookies", price: 12.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4809014286044-01.jpg" },
    { id: 6, name: "Chocolate", price: 20.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/5902768865677-01.jpg" },
  ]);

  const [total, setTotal] = useState(0)


  const getCartCount = () => {
    let count = products.map(x => x.quantity).reduce((a: number, b: number) => a + b, 0)
    return setTotal(count)
  }


  return (
    <div className="App">
      <CartComponent
        items={products}
        storeName={"Jerriz Store"}
        customBtnShow={true}
        customBtnFunc={getCartCount}
        customBtnText={"Get total cart items"}
      />
      <span>Total Cart Items: {total}</span>
    </div>
  );
}

export default App

```


## riz-shoppingcart-v7 changelogs

  v1.0.1 
    - rebuild and added cart mode feature

  v1.0.2 
    - removed cart mode, added custom button , redesign cart component

  v1.0.3 
    - fix custom button function and UI

  v1.0.4 
    - fix naming convention, added node version in package.json(engine)

  v1.1.0

    -Redesign shopping cart
    -removed product section
    -Changed remove button from removing quantity to removing item
    -fix naming convention
    -recreate redux, removed dummy data
    -updated readme
  
  v1.1.1
    - updated readme

## Node Version
 node - v14.15.4