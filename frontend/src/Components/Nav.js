import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
    const navigate = useNavigate()
    const auth = localStorage.getItem("user")
    let Logout = () => {
        localStorage.clear()
        navigate("/signup")
    }
    return (
        <div className='nav-background'>
            {auth ? <ul className='nav-ul'>
                <li><Link to="/get">Get Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link onClick={Logout} to={"/signup"}>Logout({JSON.parse(auth).User.name})</Link></li>


            </ul> : <ul className='nav-ul-nav-right'>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>}
        </div>
    )
}
