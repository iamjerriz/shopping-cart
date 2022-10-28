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
    { id: 7, name: "Powder Mix", price: 15.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/8936066340397-01.jpg" },
    { id: 8, name: "Tomato Sauce", price: 13.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/133083-1_1_.jpg" },
    { id: 8, name: "Liver Spread", price: 25.00, quantity: 0, img: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/104400-01_7.jpg" },
  ]);

  return (
    <div className="App d-flex">
      <CartComponent
        items={[items]}
        cartMode={true}
        storeName={"Jerriz Store"} />
    </div>
  );
}

export default App;
