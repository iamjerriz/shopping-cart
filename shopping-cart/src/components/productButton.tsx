import React from 'react'
import { Button } from 'react-bootstrap';
import { iButtonProps } from 'src/types/itemTypes';

export const ProductButton = (btn: iButtonProps) => {
  return (
    <Button
      className='product-button bg-secondary'
      onClick={() => btn.onClickFunction(btn.param)}>
      {btn.text}
    </Button>
  )
}

export default ProductButton