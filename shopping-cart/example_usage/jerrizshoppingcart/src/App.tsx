import React, { useState } from 'react';
import './App.css';
import useCartModel from './model/userCartModel';
import { itemState } from './types/itemTypes';
import { CartComponent } from 'riz-shoppingcart-v3';

function App() {

  const { increment, decrement, useCartSelector } = useCartModel()

  // items={[items]}
  // btnFunction1={btnFunction1}
  // btnFunction2={btnFunction2}
  // btnText1={btnText1}
  // btnText2={btnText2}
  // showBtn={showBtn}
  // showItemImage={showItemImage}
  // showItemName={showItemName}
  // showItemPrice={showItemPrice}

  return (
    <div className="App">

      <div>
        <CartComponent
          items={[useCartSelector.data]}
          btnFunction1={increment}
          btnFunction2={decrement}
          btnText1={"+"}
          btnText2={"-"}
          showListMode={false}
        />
      </div>

      <div>
        <span>TOTAL: {useCartSelector.total}</span>
        <CartComponent
          items={[useCartSelector.data]}
          btnFunction1={increment}
          btnFunction2={decrement}
          showListMode={true}
          btnText1={''}
          btnText2={''}
        />
      </div>

    </div>
  );
}

export default App;
