import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import ProductsList from './Products/ProductsList';
// import ProductForm from './Products/ProductForm';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './Cart/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="App w-100 d-flex">
        <ProductsList />
        {/* <ProductForm /> */}
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;
