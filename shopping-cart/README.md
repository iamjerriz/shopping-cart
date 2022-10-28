# Shopping Cart With TS and Redux

A prototype of shopping cart using typescript and redux

## Installation

npm i riz-shoppingcart-v5

## Documentation

items = array of products to display

cartMode = show added items in your cart section with remove item button

storeName = show custom store name

## Props

items = array

cartMode = boolean

storeName = string


## Items Data Model

name : string

price : number

id : number

quantity : number

img : any

## Screenshots


cartMode = false


![App Screenshot](https://i.ibb.co/BjJBsNM/output2.png)


cartMode = True


![App Screenshot](https://i.ibb.co/4Jqr6KC/output1.png)


## Usage/Examples

```javascript
import React from 'react';
import CartComponent from 'riz-shoppingcart-v5';
import './App.css';

function App() {

  const items = ([
    { id: 1, name: "Beer", price: 1.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg" },
    { id: 2, name: "Vinegar", price: 21.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg" },
    { id: 3, name: "Pork & Beans", price: 20.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg" },
    { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg" },
    { id: 5, name: "Cookies", price: 12.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4809014286044-01.jpg" },
    { id: 6, name: "Chocolate", price: 20.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/5902768865677-01.jpg" },
  ]);

  return (
    <div className="App d-flex">
      <CartComponent 
        items={[items]} // items array
        cartMode={false} // show added items in your cart
        storeName={"Jerriz Store"} // custom store name
      /> 
    </div>
  );
}

export default App;

```
