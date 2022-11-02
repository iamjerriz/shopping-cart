import React from 'react'
import { Button } from 'react-bootstrap';
import { IButtonProps } from 'src/types/types';

export const CustomButton = (btn: IButtonProps) => {
  return (
    <Button
      className='custom-button bg-secondary'
      onClick={() => btn.onClickFunction(btn.param)}>
      {btn.text}
    </Button>
  )
}

export default CustomButton