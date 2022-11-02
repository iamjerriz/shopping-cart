import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { store } from './state';
import { IShoppingCartProps } from './types/types';
import CartView from './views/CartView';
import './views/cart.css';

export const CartComponent = ({ items, customBtnShow, customBtnText, customBtnFunc }: IShoppingCartProps): JSX.Element => {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <CartView
          items={[items]}
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
// import { store } from "./state/index";
// import './views/cart.css';

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
