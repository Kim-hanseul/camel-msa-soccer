import axios from "axios";
import style from "board/style/board-form.module.css"
import React,{useState} from 'react'


export default function TeamForm(){
    
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        const {value, name} = e.target; // e.target 은 왜 쓰는것인가?
        setInputs({...inputs, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`등록할 게시글 : ${JSON.stringify(inputs)} `)
        axios.post('http://localhost:5000/api/board/write', inputs)
        .then(res=> {
            alert(JSON.stringify(res.data))
        })
        .catch(err=>alert(err))
    }
    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">아이디</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="passengerId" name="passengerId" onChange={handleChange} placeholder="게시글 작성자 ID 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={handleChange} placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">팀목록</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange} > 
                    <option value="">choose team</option>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" onChange={handleChange}  style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                onClick={handleSubmit} value="Submit"/>
            </div>
            </htmlForm>
            </div>
    </>)
}