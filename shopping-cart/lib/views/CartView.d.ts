/// <reference types="react" />
interface Props {
    items: any[];
    btnFunction1: (event: any) => void;
    btnFunction2: (event: any) => void;
    btnText1?: string;
    btnText2?: string;
    showListMode: boolean;
}
export declare const CartView: ({ items, btnFunction1, btnFunction2, btnText1, btnText2, showListMode }: Props) => JSX.Element;
export default CartView;
