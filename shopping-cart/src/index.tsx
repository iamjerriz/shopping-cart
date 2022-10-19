import React from 'react';
import App from './App';

interface Props {
  items: any[]
  customBtnShow: Boolean;
  customBtnText: string
  customBtnFunc: any;
}

const CartComponent = ({items, customBtnShow, customBtnText, customBtnFunc}: Props): JSX.Element => {
  
  return (
    <App items={[items]} customBtnText={customBtnText} customBtnShow={customBtnShow} customBtnFunc={customBtnFunc} />
  );
}

export default CartComponent;
