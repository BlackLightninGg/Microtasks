import React from 'react';

type ButtonPropsType = {
    addMessage: () => void
    operator:string
}
export const Button = (props: ButtonPropsType) => {

    const onclickButtonHandler = () => {
        props.addMessage()
    }

    return (
        <button onClick={onclickButtonHandler}>{props.operator}</button>
    );
};
