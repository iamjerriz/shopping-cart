import './App.css';
import React, { useState } from "react";
import { CartComponent } from 'riz-shoppingcartasd-v2';

function App() {

  const [products, setCart] = useState([
    { id: 1, name: "Beer", price: 1.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg" },
    { id: 2, name: "Vinegar", price: 21.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg" },
    { id: 3, name: "Pork & Beans", price: 20.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg" },
    { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg" }
  ]);

  // const items = [
  //   { id: 1, name: "Beer", price: 1.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg" },
  //   { id: 2, name: "Vinegar", price: 21.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg" },
  //   { id: 3, name: "Pork & Beans", price: 20.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg" },
  //   { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg" },
  //   { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg" },
  //   { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg" }
  // ]

  const btnFunc1 = () => {
    console.log("btn1 Clicked")
  }

  const btnFunc2 = () => {
    console.log("btn2 Clicked")
  }

  // const remove = (id) => {
  //   let newArr = products.filter(products => products.id !== id);
  //   setCart(newArr);
  //   console.log("asd", newArr)
  // }

  return (
    <div className="App">
      <CartComponent
        items={[products]}
        btnFunction1={btnFunc1}
        btnFunction2={btnFunc2}
        btnText1={"+"}
        btnText2={"-"}
      />
    </div>
  );
}

export default App