# Shopping Cart With TS and Redux

A prototype of shopping cart using typescript and redux

## Installation

npm i shopping-cart-jerriz-v3

## Screenshots

![App Screenshot](https://i.ibb.co/PhmDrMz/ccc.png)

## Documentation

items = array of products to display

title = string title of shopping cart to display

removeProdFunc = Function that triggers on click

showRemove = boolean to show remove product button

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
        title={"Jerriz Store"} //title header
        showRemove={false} //hide and show remove button
        removeProdFunc={remove} //remove function
      />
    </div>
  );
}

export default App;
```
