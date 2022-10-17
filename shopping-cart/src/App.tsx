import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store, { RootState } from './store';
import ProductView from './screens/product/ProductView';

interface Props {
  title: string
  items: any[]
  showRemove: Boolean;
  removeProdFunc: any;
}

export function App({title, items, showRemove, removeProdFunc}: Props) {
  
  return (
    <Provider store={store}>
      <div className="App w-100 d-flex">
        <ProductView items={[items]} showRemove={showRemove} removeProdFunc={removeProdFunc} title={title} />
      </div>
    </Provider>
  );
}

export default App;
