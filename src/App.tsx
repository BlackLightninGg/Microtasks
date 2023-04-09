import {useState} from "react";
import {InputWithButton} from "./InputWithButton";
import {Input} from "./Input";
import {Button} from "./Button";


function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message2'}
    ])

    let [inputText, setInputText] = useState('')

    const changeInputText = (messageText:string)=> {
        setInputText(messageText)
    }

    let addMessage = () => {
        setMessage([{message: inputText}, ...message])
        setInputText('')
    }

    // let addMessage1 = (messageText: string) => {
    //     setMessage([{message: messageText}, ...message])
    // }

    // let addMessage = () => {
    //     addMessage1(inputText)
    //     setInputText('')
    // }

    return (
        <div className="App">

            {/*<InputWithButton addMessage={addMessage}/>     //   Universal input + button*/}
            <Input inputText={inputText} changeInputText={changeInputText}/>
            <Button addMessage={addMessage} operator='+'/>

            {message.map((el, index) => <div key={index}>
                {el.message}
            </div>)}
        </div>
    );
}

export default App;
