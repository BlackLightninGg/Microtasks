import React, { useState } from "react";
import { NewComponent } from "./NewComponent";
import { Button } from "./Button";

function App() {
  //   const [students, setStudents] = useState([
  //     { id: 1, name: "James", age: 8 },
  //     { id: 2, name: "Robert", age: 18 },
  //     { id: 3, name: "John", age: 28 },
  //     { id: 4, name: "Michael", age: 38 },
  //     { id: 5, name: "William", age: 48 },
  //     { id: 6, name: "David", age: 58 },
  //     { id: 7, name: "Richard", age: 68 },
  //     { id: 8, name: "Joseph", age: 78 },
  //     { id: 9, name: "Thomas", age: 88 },
  //     { id: 10, name: "Charles", age: 98 },
  //     { id: 11, name: "Christopher", age: 100 },
  //   ]);

  //   const topCars = [
  //     { manufacturer: "BMW", model: "X5" },
  //     { manufacturer: "Mersedes", model: "MLS" },
  //     { manufacturer: "Audi", model: "Q7" },
  //   ];
 

  const ButtonFoo1 = (name:string, age:number, adress:string) => {
    console.log(name, age, adress)
  }

  const ButtonFoo2 = (name:string) => {
    console.log(name)
  }

  const ButtonFoo3 = () => {
    console.log("I'am stupid button")
  }

  

  return (
    <div className="App">
      {/* <NewComponent students={students} cars={topCars}/> */}
      <Button name={"Button 1"} callback={()=> ButtonFoo1("Anrew", 29, "live in London")}/>
      <Button name={"Button 2"} callback={()=> ButtonFoo2("Sanya")}/>
      <Button name={"Stupid Button"} callback={ButtonFoo3}/>
    </div>
  );
}

export default App;
