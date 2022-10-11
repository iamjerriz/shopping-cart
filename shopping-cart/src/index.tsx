import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let items2 = [ 
  { id: 1, name: "Jean", price: 1.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg"},
  { id: 2, name: "Vinegar", price: 21.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg"},
  { id: 3, name: "Pork & Beans", price: 20.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg"},
  { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg"}
  ]
root.render(
  <React.StrictMode>
    <App items={[items2]} />
  </React.StrictMode>
);
