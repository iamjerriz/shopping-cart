import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../state/index';
import { itemState } from '../types/itemTypes';


export default function useCartModel() {

    const useCartSelector = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();

    const increment = (item: itemState) => {
        console.log("akljsd", item)
        dispatch(actionCreator.incrementQuantity(item))
    }

    const decrement = (item: itemState) => {
        console.log("akljsd", item)
        dispatch(actionCreator.decrementQuantity(item))
    }


    return {
        useCartSelector,
        increment,
        decrement,
    }
}