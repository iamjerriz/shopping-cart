import { Button } from 'react-bootstrap'
import React, { Component } from 'react'

interface Props {
  text: string;
}

export const ProductButton = ({text}: Props) => {
    return (
      <Button className="w-100">{text}</Button>
    )
  }

export default ProductButton