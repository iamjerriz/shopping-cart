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
