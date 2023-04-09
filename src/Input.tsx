import React, {ChangeEvent} from 'react';

type InputPropsType = {
    inputText: string
    changeInputText: (messageText:string)=> void
}
export const Input = (props:InputPropsType) => {

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        props.changeInputText(event.currentTarget.value)
    }

    return (
        <input value={props.inputText} onChange={onChangeInputHandler}/>
    );
};
