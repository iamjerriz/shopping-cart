import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store, { RootState } from './store';
import ProductView from './screens/ProductView';

export function App() {

  const [products, setCart] = useState([ 
    { id: 1, name: "Beer", price: 1.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/57089256%20-%2001.jpg"},
    { id: 2, name: "Vinegar", price: 21.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4806515630291-1.jpg"},
    { id: 3, name: "Pork & Beans", price: 20.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/119593-01.jpg"},
    { id: 4, name: "Blanca Mix", price: 10.00, quantity: 0, imgUrl: "https://qa-centralmain.s3.ap-southeast-1.amazonaws.com/market/4800552169066-01.jpg"}
    ]);

  const remove = (id: number) => {
    let newArr = products.filter(products => products.id !== id);
    setCart(newArr);
    console.log("asd",newArr)
  }

  return (
    <Provider store={store}>
      <div className="App w-100 d-flex">
        <ProductView 
          items={[products]} 
          customBtnText={"remove product"} 
          customBtnShow={true} 
          customBtnFunc={remove}
          />
      </div>
    </Provider>
  );
}

export default App;
