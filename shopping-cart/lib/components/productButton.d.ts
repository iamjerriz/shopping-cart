/// <reference types="react" />
interface buttonProps {
    text?: string;
    onClickFunction: (event: any) => void;
    param?: any;
}
export declare const ProductButton: (btn: buttonProps) => JSX.Element;
export default ProductButton;
