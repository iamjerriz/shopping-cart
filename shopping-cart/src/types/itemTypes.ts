export interface itemsState {
  id: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
}

export interface propTypes {
  items: any[]
  itemBtnFunction1: (event: any) => void;
  itemBtnFunction2: (event: any) => void;
  btnText1?: string;
  btnText2?: string;
  cartMode?: boolean;
  cartBtnFunction: (event: any) => void;
}