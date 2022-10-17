import React from 'react';
import App from './App';

interface Props {
  title: string
  items: any[]
  showRemove: Boolean;
  removeProdFunc: any;
}

const CartComponent = ({title, items, showRemove, removeProdFunc}: Props): JSX.Element => {
  
  return (
    <App items={[items]} title={title} showRemove={showRemove} removeProdFunc={removeProdFunc}/>
  );
}

export default CartComponent;
