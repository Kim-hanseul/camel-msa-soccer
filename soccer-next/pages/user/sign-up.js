import axios from "axios"
import { useState } from "react"

export default function SignUp(){

    const [inputs, setInputs] = useState({})
    const proxy = 'http://localhost:5000'

    const handleChange =e=> {
        e.preventDefault()
        const {value,name} = e.target
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 회원정보 : ${JSON.stringify(inputs)}`)
        axios.post(proxy+'/api/user/sign-up', inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
    }


    return (<div>
            <h1>Sign up Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label><b>User ID </b></label>
                    <input type="text" name='username' onChange={handleChange} /><br />

                    <label htmlFor=""><b>Password </b></label>
                    <input type="text" name='password' onChange={handleChange} /><br />

                    <label><b>Name </b></label>
                    <input type="text" name='name' onChange={handleChange} /><br />

                    <label><b> Telephone number </b></label>
                    <input type="text" name='telephone' onChange={handleChange} /><br />
                    <input type="submit" value=" Enter "/><br />
                </div>
        <div> 결과 : <span id="result-span"></span> </div>
        </form>
    </div> )
}