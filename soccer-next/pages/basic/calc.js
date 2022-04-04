import axios from "axios";
import React, { useState } from "react";
export default function Calc() {

    const [inputs, setInputs] = useState({opcode: "+"})
    const [result, setResult] = useState(``)
    const { num1, num2, opcode} = inputs

    const onChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({...inputs,[name]: value})
    }

    const onClick = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/basic/bmi', inputs)
        .then(res => {
            const calc = res.data
            document.getElementById('result-span').innerHTML = `
            <h3> num1 : ${calc.num1}</h3>
            <h3> opcode : ${calc.opcode}</h3>
            <h3> num2 : ${calc.num2}</h3>
            <h3> result : ${calc.calc}</h3>`
        })
        .catch(err => alert(err))
        switch (opcode){
            case "+" :
                return setResult(Number(num1) + Number(num2))
            case "-" :
                return setResult(Number(num1) - Number(num2))
            case "*" :
                return setResult(Number(num1) * Number(num2))
            case "/" :
                return setResult(Number(num1) / Number(num2))
            case "%" :
                return setResult(Number(num1) % Number(num2))
            default :
                alert("error")
        }
    }

    return (<div>
    <form action="" onSubmit={onClick}>
        <h1>계산기</h1>
        <div>

            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> <br />

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />
            <button onClick={onClick}>계산하기</button>
        </div>
        </form>
        <div>결과 : <span id="result-span"></span> </div>
    </div>
    )
}