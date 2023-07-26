import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let result
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        console.log("login is rendring to product.....1")
        const auth = localStorage.getItem("user")
        if(auth){
            navigate("/get")
        }
    },[])
    const loginHandler = async() => {
        result = await fetch("http://localhost:4000/userLogin", {
            method: "post", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ email, password })
        })
        result = await result.json()

        console.log("result...",result)
        
        if(!email|| !password){
            setError(true)
            return false
        }
        if(result.statusCode === 400){
            alert("Invalid Credentials..!")
        }
        else{
            localStorage.setItem("user",JSON.stringify(result))
            console.log("login is rendering..to product.2")
            navigate("/get")

        }
        
        
    }
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>
      
          <form>
            <input type="email" id="login" className="input fadeIn second" name="login" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>{error && !email &&<span className='input-field-error'>*Email is required</span>}
            <input type="password" id="password" className="input fadeIn third" name="login" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>{error && !password &&<span className='input-field-error'>*Password is required</span>}
            <input type="button" className="fadeIn fourth" onClick={loginHandler} value="Sign In"/>
          </form>
        </div>
      </div>
    )
}
