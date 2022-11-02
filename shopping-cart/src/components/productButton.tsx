import React from 'react'
import { Button } from 'react-bootstrap';
import { IButtonProps } from 'src/types/types';

export const ProductButton = (btn: IButtonProps) => {
  return (
    <Button
      className='product-button bg-secondary'
      onClick={() => btn.onClickFunction(btn.param)}>
      {btn.text}
    </Button>
  )
}

export default ProductButton