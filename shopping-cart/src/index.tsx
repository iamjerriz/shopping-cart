import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { store } from './state';
import { propTypes } from './types/itemTypes';
import CartView from './views/CartView';
import './views/cart.css';

export const CartComponent = ({ items, storeName, customBtnShow, customBtnText, customBtnFunc }: propTypes): JSX.Element => {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <CartView
          items={[items]}
          storeName={storeName}
          customBtnShow={customBtnShow}
          customBtnFunc={customBtnFunc}
          customBtnText={customBtnText}
        />
      </Provider>
    </React.StrictMode>
  );
}

export default CartComponent;
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import { store } from "./state/index"

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
