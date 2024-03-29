import React from "react";

export const Button = ({ children, onClickHandler }) => {
    return <button onClick={() => onClickHandler()}>{children}</button>;
};