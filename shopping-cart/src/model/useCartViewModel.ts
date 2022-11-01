import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../state/index';
import { iItemState } from '../types/types';


export default function useCartViewModel() {

    const cartSelector = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();

    const increment = (item: iItemState) => {
        dispatch(actionCreator.incrementQuantity(item))
    }

    const decrement = (item: iItemState) => {
        dispatch(actionCreator.decrementQuantity(item))
    }

    const removeItem = (item: iItemState) => {
        dispatch(actionCreator.removeItem(item))
    }

    const getData = (item: iItemState) => {
        dispatch(actionCreator.getData(item))
    }

    return {
        cartSelector,
        increment,
        decrement,
        removeItem,
        getData
    }
}