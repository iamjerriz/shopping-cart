import React, { useState } from 'react';
import './App.css';
import useCartModel from './model/userCartModel';
import { itemState } from './types/itemTypes';
import { CartComponent } from 'riz-shoppingcart-v2';


function App() {

  const { increment, decrement, useCartSelector } = useCartModel()

  const btnFunc1 = () => {
    console.log("btn1 Clicked")
  }

  const items = useCartSelector.data

  const btnFunc2 = () => {
    console.log("btn2 Clicked")
  }

  console.log("asdasd", useCartSelector.data)
  return (
    <div className="App">
      <div>
        <CartComponent
          items={[items]}
          btnFunction1={increment}
          btnFunction2={decrement}
          btnText1={"+"}
          btnText2={"-"}
        />

      </div>
      <div>
        <span>TOTAL: {useCartSelector.total}</span>
      </div>
    </div>
  );
}

export default App;
