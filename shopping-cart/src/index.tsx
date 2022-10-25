import React from 'react';
import App from './App';

interface Props {
  items: any[]
  btnFunction1: (event: any) => void;
  btnFunction2: (event: any) => void;
  btnText1: string;
  btnText2: string;
  showListMode: boolean;
}

export const CartComponent = ({ items, btnFunction1, btnFunction2, btnText1, btnText2, showListMode }: Props): JSX.Element => {

  return (
    <App
      items={[items]}
      btnFunction1={btnFunction1}
      btnFunction2={btnFunction2}
      btnText1={btnText1}
      btnText2={btnText2}
      showListMode={showListMode}
    />
  );
}

export default CartComponent;
