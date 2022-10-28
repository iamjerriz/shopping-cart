import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../state/index';
import { itemState } from '../types/itemTypes';


export default function useCartModel() {

    const useCartSelector = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();

    const increment = (item: itemState) => {
        dispatch(actionCreator.incrementQuantity(item))
    }

    const decrement = (item: itemState) => {
        dispatch(actionCreator.decrementQuantity(item))
    }

    const removeItem = (item: itemState) => {
        dispatch(actionCreator.removeItem(item))
    }

    const getData = (item: itemState) => {
        dispatch(actionCreator.getData(item))
    }

    return {
        useCartSelector,
        increment,
        decrement,
        removeItem,
        getData
    }
}