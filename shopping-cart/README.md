# Shopping Cart With TS and Redux

A prototype of shopping cart using typescript and redux

## Installation

npm i shopping-cart-jerriz-v1

## Screenshots

![App Screenshot](https://i.ibb.co/PhmDrMz/ccc.png)

## Documentation

items = array of products to display

title = string title of shopping cart to display

## Items Data Model

name : string

price : number

id : number

quantity : number

imgUrl : any

## Usage/Examples

```javascript
import CartComponent from "shopping-cart-mvvm-ts-redux-v7";

function App() {
  //items to pass to the cart component
  //can be json file or product to call on
  let sampleItems = [
    { id: 1, name: "Product 1", price: 1.0, quantity: 0, imgUrl: "https://sample.jpg" },
    { id: 2, name: "Product 2", price: 21.0, quantity: 0, imgUrl: "https://sample.jpg" },
    { id: 3, name: "Product 3", price: 20.0, quantity: 0, imgUrl: "https://sample.jpg" },
    { id: 4, name: "Product 4", price: 10.0, quantity: 0, imgUrl: "https://sample.jpg" },
  ];

  return (
    <div className="App">
      <CartComponent items={[sampleItems]} title={"sample title"} />
    </div>
  );
}

export default App;
```
