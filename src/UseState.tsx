import { useState } from "react";

export const UseStateLearn = () => {
  // let a = 1

  let [a, setA] = useState(1)
  

  const onClickIncreaseOnOne = () => {
    setA(++a)
    console.log(a);
  }

  const onClickReset = () => {
    setA(a = 0);
    console.log(a);
  }



  return <div>
    <h1>{a}</h1>
    <button onClick={onClickIncreaseOnOne}>Button</button>
    <button onClick={onClickReset}>0</button>
  </div>

}