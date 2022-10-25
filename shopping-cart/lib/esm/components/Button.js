import React from 'react';
import { Button } from 'react-bootstrap';
export const CustomButton = (btn) => {
    return (React.createElement(Button, { style: { width: "40px", height: "40px" }, className: 'custom-button bg-secondary rounded-circle border-0', onClick: () => btn.onClickFunction(btn.param) }, btn.text));
};
export default CustomButton;
