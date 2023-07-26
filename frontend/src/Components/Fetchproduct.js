import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'


export default function Fetchproduct() {
    const [products, setProducts] = useState([])
    const getProduct = async () => {
        let result = await fetch("http://localhost:4000/getProduct")
        setProducts(await result.json())
    }
    useEffect(() => {
        getProduct()
    }, [])
    const deleteProduct = async (id) => {
        await fetch(`http://localhost:4000/deleteProduct/${id}`, { method: "post" })
        getProduct()

    }
    const columns = [
        {
            name: "Name",
            selector: row => row.name
        },
        {
            name: "Description",
            selector: row => row.description
        },
        {
            name: "Price",
            sortable: true,
            selector: row => row.price
        },
        {
            name: "category",
            selector: row => row.category,
        },
        {
            name: "operation",
            selector: row => row.operation,
            cell: row => (
            <div>
                <button type="button" onClick={() => deleteProduct(row._id)}>delete</button>
                <Link className='editButton' to={`/update/${row._id}`}>Edit</Link>
            </div>
            )   
        },
    ];

    const searchHandle = async (e) => {
        const key = e.target.value
        if (key) {
            const result = await fetch(`http://localhost:4000/searchProduct/${key}`)
            const search = await result.json()
            if (search) {
                setProducts(search)
            }
        } else {
            getProduct()
        }
    }
    console.log('products', products);
    return (
        <div className='productList'>
            <h1>Product List</h1>
            <div>
                <input type="text" onChange={searchHandle} className="searchBox" placeholder='search Product' />
            </div>


              <DataTable
              columns = {columns}
              data = {products}
              pagination
              />

        </div>
    )
}
