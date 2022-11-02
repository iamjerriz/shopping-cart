export interface IItemState {
  id: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
}

export interface IButtonProps {
  text?: string;
  onClickFunction: (event: any) => void;
  param?: any;
}


export interface IShoppingCartProps {
  items: any[]
  customBtnShow?: boolean;
  customBtnFunc: (event: any) => void;
  customBtnText?: string
}
