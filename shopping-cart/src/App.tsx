import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store';
import ProductView from './screens/product/ProductView';
import Cart from './screens/cart/CartView';

function App() {
  return (
    <Provider store={store}>
      <div className="App w-100 d-flex">
        <ProductView />
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;
