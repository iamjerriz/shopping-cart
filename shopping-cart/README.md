# Shopping Cart With TS and Redux

A prototype of shopping cart using typescript and redux

## Installation

npm i shopping-cart-jerriz-v1

## Screenshots

![App Screenshot](https://i.ibb.co/PhmDrMz/ccc.png)

## Documentation

items = array of products to display

customBtnShow: Boolean show custom buttom for every product

customBtnText: string button custom title

customBtnFunc: any function for custom button

## Props

items = array

customBtnShow = boolean

customBtnText = string

customBtnFunc = function

## Items Data Model

name : string

price : number

id : number

quantity : number

imgUrl : any

## Usage/Examples

```javascript
import logo from "./logo.svg";
import "./App.css";
import CartComponent from "jerriz-shoppingcart-v3";

function App() {
  const [products, setCart] = useState([
    { id: 1, name: "name", price: 1.0, quantity: 0, imgUrl: "sample.png" },
    { id: 2, name: "name", price: 21.0, quantity: 0, imgUrl: "sample.png" },
    { id: 3, name: "name", price: 20.0, quantity: 0, imgUrl: "sample.png" },
    { id: 4, name: "name", price: 10.0, quantity: 0, imgUrl: "sample.png" },
  ]);

  //sample function to remove product from store, and return new array
  const remove = (id) => {
    let newArr = products.filter((products) => products.id !== id);
    setCart(newArr);
    console.log("asd", newArr);
  };

  return (
    <div className="App">
      <CartComponent
        items={[products]} //products
        customBtnText="Remove Product" //custom button text
        customBtnShow={true} // show custom button
        customBtnFunc={remove} //pass remove function data out new array from mini app
      />
    </div>
  );
}

export default App;
```
