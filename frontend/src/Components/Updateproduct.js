
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Updateproduct() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [error, setError] = useState(false)
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    productgetById()
  }, [])

  const productgetById = async () => {
    const result = await fetch(`http://localhost:4000/getProductById/${params.id}`)
    const resp = await result.json()
    setName(resp.name)
    setDescription(resp.description)
    setCategory(resp.category)
    setPrice(resp.price)


  }



  const editProduct = async () => {
    const result = await fetch(`http://localhost:4000/updateProduct/${params.id}`, {
      method: "post", body: JSON.stringify({ name, description, price, category }), headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(await result.json())
    if (!name || !description || !price || !category) {
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
      <h2 className="active"> Edit Product </h2>
  
      <form>
        <input type="text" id="login" className="input fadeIn second" name="login" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
        {error && !name &&<span className='input-field-error'>*Name is required</span>}
        <input type="text" id="login" className="input fadeIn second" name="login" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description"/>
        {error && !description &&<span className='input-field-error'>*Email is required</span>}
        <input type="text" id="login" className="input fadeIn third" name="login" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price"/>
        {error && !price &&<span className='input-field-error'>*Password is required</span>}
        <input type="text" id="login" className="input fadeIn third" name="login" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category"/>
        {error && !category &&<span className='input-field-error'>*Password is required</span>}
        <input type="button" className="fadeIn fourth" onClick={editProduct} value="Edit Product"/>
      </form>
    </div>
  </div>
  )
}
