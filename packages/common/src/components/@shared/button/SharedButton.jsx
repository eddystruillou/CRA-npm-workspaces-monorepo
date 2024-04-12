import React from "react";
import { Button } from 'antd';

export const SharedButton = ({ buttonType, children, onClickHandler }) => {
    return <Button type={buttonType} onClick={() => onClickHandler()}>{children}</Button>;
};