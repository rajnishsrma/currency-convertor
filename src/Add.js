import React, {useState} from "react";

function Add(){

    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(2);
    const [res, setRes] = useState(2);

    let n1 = (e)=>{
        setNum1(e.target.value) 
    }
    let n2 = (e)=>{
        setNum2(e.target.value) 
    }

   
    const adding = ()=>{
       let x = Number(num1)  + Number(num2);
      setRes(x);
    }
    const substraction = ()=>{
       let x = Number(num1)  - Number(num2);
      setRes(x);
    }
    const multiply = ()=>{
       let x = Number(num1)  * Number(num2);
      setRes(x);
    }
    const devision = ()=>{
       let x = Number(num1)  / Number(num2);
      setRes(x);
    }
    

    return <div>
        <input onChange={n1} type="number"></input>
        <input onChange={n2} type="number"></input>
        <h1>{res}</h1>
    <button onClick={adding}>add</button>
    <button onClick={substraction}>substract</button>
    <button onClick={multiply}>multiply</button>
    <button onClick={devision}>devide</button>
    </div>
}
export default Add;