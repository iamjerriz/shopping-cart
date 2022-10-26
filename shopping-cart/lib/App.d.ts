/// <reference types="react" />
import 'bootstrap/dist/css/bootstrap.css';
interface Props {
    items: any[];
    btnFunction1: (event: any) => void;
    btnFunction2: (event: any) => void;
    btnText1: string;
    btnText2: string;
    cartMode: boolean;
    cartBtnFunction: (event: any) => void;
}
export declare const App: ({ items, btnFunction1, btnFunction2, cartBtnFunction, btnText1, btnText2, cartMode }: Props) => JSX.Element;
export default App;
