import React from 'react'

interface buttonProps {
  text: string;
  onClickFunction: (event: any) => void;
  param: any;
}

export default function CustomButton(btn: buttonProps) {
  return (
    <button onClick={() => btn.onClickFunction(btn.param)} className='custom-button'>{btn.text}</button>
  )
}