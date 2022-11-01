export interface iItemState {
  id: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
}

export interface iButtonProps {
  text?: string;
  onClickFunction: (event: any) => void;
  param?: any;
}


export interface iShoppingCartProps {
  items: any[]
  storeName?: string;
  customBtnShow?: boolean;
  customBtnFunc: (event: any) => void;
  customBtnText?: string
}
