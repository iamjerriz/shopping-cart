export interface itemState {
  id: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
}

export interface buttonProps {
  text?: string;
  onClickFunction: (event: any) => void;
  param?: any;
}

export interface items {
  items: any[]
}

export interface propTypes {
  items: any[]
  cartMode?: boolean;
  storeName?: string
}

