import React from 'react'
import { Button } from 'react-bootstrap';

interface buttonProps {
  text?: string;
  onClickFunction: (event: any) => void;
  param?: any;
}

export const CustomButton = (btn: buttonProps) => {
  return (
    <Button
      style={{ width: "40px", height: "40px" }}
      className='custom-button bg-secondary rounded-circle border-0'
      onClick={() => btn.onClickFunction(btn.param)}>
      {btn.text}
    </Button>
  )
}

export default CustomButton