/// <reference types="react" />
interface buttonProps {
    text?: string;
    onClickFunction: (event: any) => void;
    param?: any;
}
export declare const CustomButton: (btn: buttonProps) => JSX.Element;
export default CustomButton;
