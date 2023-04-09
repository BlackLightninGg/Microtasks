import { ChangeEvent, useState } from "react"

type InputWithButtonPropsType = {
  addMessage: (messageText:string)=> void
}
export const InputWithButton = (props:InputWithButtonPropsType) => {
  let [tittle, useTittle] = useState('')
  const OnChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    useTittle(event.currentTarget.value)
  }

  const OnClickButtonHandler = () => {
    props.addMessage(tittle)
    useTittle('')
  }

  return <div>
    <input value={tittle} className='inputButton' onChange={OnChangeInputHandler} />
    <button onClick={OnClickButtonHandler}>+</button>
  </div>
}