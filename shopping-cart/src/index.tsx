import React from 'react';
import App from './App';

interface Props {
  items: any[],
  title: string
}

const CartComponent = ({items, title}: Props): JSX.Element => {
  
  return (
    <App items={[items]} title={title}/>
  );
}

export default CartComponent;
