import React from 'react';
import App from './App';
import { propTypes } from './types/itemTypes';
import CartView from './views/CartView';

export const CartComponent = ({ items, itemBtnFunction1, itemBtnFunction2, cartBtnFunction, btnText1, btnText2, cartMode }: propTypes): JSX.Element => {

  return (
    <CartView
      items={[items]}
      itemBtnFunction1={itemBtnFunction1}
      itemBtnFunction2={itemBtnFunction2}
      btnText1={btnText1}
      btnText2={btnText2}
      cartMode={cartMode}
      cartBtnFunction={cartBtnFunction}
    />
  );
}

export default CartComponent;
