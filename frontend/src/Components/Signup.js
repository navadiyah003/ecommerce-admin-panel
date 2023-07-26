import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            console.log("signup rendring...1")
            navigate("/login")

        }
    }, [])
    let result;
    let signUp = async () => {
        console.log(name, email, password)
        result = await fetch("http://localhost:4000/addUser", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: { "Content-Type": "application/json" }

        })
        result = await result.json()
        if (!name || !email || !password) {
            setError(true)
            return false
        } if (result.statusCode === 400) {
            alert("Email is already exist...!")
        }
        else {
            navigate("/login")


        }
    }
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign Up </h2>
      
          <form>
            <input type="text" id="login" className="input fadeIn second" name="login" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
            {error && !name &&<span className='input-field-error'>*Name is required</span>}
            <input type="text" id="login" className="input fadeIn second" name="login" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
            {error && !email &&<span className='input-field-error'>*Email is required</span>}
            <input type="password" id="password" className="input fadeIn third" name="login" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
            {error && !password &&<span className='input-field-error'>*Password is required</span>}
            <input type="button" className="fadeIn fourth" onClick={signUp} value="Sign Up"/>
          </form>
        </div>
      </div>
    )
}
