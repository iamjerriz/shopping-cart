import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store';
import ProductView from './screens/product/ProductView';

interface Props {
  items: any[]
  title: string
}

export function App({items, title}: Props) {

  return (
    <Provider store={store}>
      <div className="App w-100 d-flex">
        <ProductView items={[items]} title={title}/>
      </div>
    </Provider>
  );
}

export default App;
