import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store, { RootState } from './store';
import ProductView from './screens/product/ProductView';

interface Props {
  items: any[]
  customBtnShow: Boolean;
  customBtnText: string
  customBtnFunc: any;
}

export function App({items, customBtnText, customBtnShow, customBtnFunc}: Props) {

  return (
    <Provider store={store}>
      <div className="App w-100 d-flex">
        <ProductView 
          items={[items]} 
          customBtnText={customBtnText} 
          customBtnShow={customBtnShow} 
          customBtnFunc={customBtnFunc}
          />
      </div>
    </Provider>
  );
}

export default App;
