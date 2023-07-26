
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [error , setError] = useState(false)
    const navigate = useNavigate()



    const addProduct = async()=>{
      let userId = JSON.parse(localStorage.getItem("user")).User.id
        const result = await fetch("http://localhost:4000/addProduct",{method:"post", body:JSON.stringify({name,description,price,category,userId}),headers:{
            "Content-Type":"application/json"
        }})
        await result.json()
        if(!name || !description || !price || !category){
          setError(true)
          return false
        }else{
            navigate("/get")
        }
        // if(resp.statusCode === 400){
        //     alert("All fields is rquired.!")
      
        // }
    }
    
  return (
    <div className="wrapper fadeInDown">
    <div id="formContent">
      <h2 className="active"> Add Product </h2>
  
      <form>
        <input type="text" id="login" className="input fadeIn second" name="login" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
        {error && !name &&<span className='input-field-error'>*Name is required</span>}

        <input type="text" id="login" className="input fadeIn second" name="login" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description"/>
        {error && !description &&<span className='input-field-error'>*description is required</span>}

        <input type="number" id="login" className="input fadeIn third" name="login" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price"/>
        {error && !price &&<span className='input-field-error'>*price is required</span>}

        <input type="text" id="login" className="input fadeIn third" name="login" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category"/>
        {error && !category &&<span className='input-field-error'>*category is required</span>}

        <input type="button" className="fadeIn fourth" onClick={addProduct} value="Add Product"/>
      </form>
    </div>
  </div>
  )
}
