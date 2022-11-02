import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../state/index';
import { IItemState } from '../types/types';


export default function useCartViewModel() {

    const cartSelector = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();

    const increment = (item: IItemState) => {
        dispatch(actionCreator.incrementQuantity(item))
    }

    const decrement = (item: IItemState) => {
        dispatch(actionCreator.decrementQuantity(item))
    }

    const removeItem = (item: IItemState) => {
        dispatch(actionCreator.removeItem(item))
    }

    const getData = (item: any[]) => {
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