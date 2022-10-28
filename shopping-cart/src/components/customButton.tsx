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
      style={{ minWidth: "250px", maxWidth: "250px", height: "40px" }}
      className='custom-button bg-secondary'
      onClick={() => btn.onClickFunction(btn.param)}>
      {btn.text}
    </Button>
  )
}

export default CustomButton