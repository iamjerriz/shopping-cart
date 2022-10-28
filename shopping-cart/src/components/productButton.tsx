import React from 'react'
import { Button } from 'react-bootstrap';

interface buttonProps {
  text?: string;
  onClickFunction: (event: any) => void;
  param?: any;
}

export const ProductButton = (btn: buttonProps) => {
  return (
    <Button
      className='product-button bg-secondary'
      onClick={() => btn.onClickFunction(btn.param)}>
      {btn.text}
    </Button>
  )
}

export default ProductButton