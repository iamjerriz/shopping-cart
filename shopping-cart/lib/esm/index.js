import React from 'react';
import App from './App';
export const CartComponent = ({ items, btnFunction1, btnFunction2, btnText1, btnText2, showListMode }) => {
    return (React.createElement(App, { items: [items], btnFunction1: btnFunction1, btnFunction2: btnFunction2, btnText1: btnText1, btnText2: btnText2, showListMode: showListMode }));
};
export default CartComponent;
