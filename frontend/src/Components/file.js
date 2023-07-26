<DataTable
columns = {columns}
data = {products}
pagination
/>




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
        cell: (row) => (
            <span style={{backgroundColor: 'blue'}}>{row.category}</span>
        )
    },
];





{
    products.length > 0 ? products.map((item, index) =>
        <ul key={index}>
            <li>{index + 1}</li>
            <li>{item?.name}</li>
            <li>{item?.description}</li>
            <li>{item?.price}</li>
            <li>{item?.category}</li>
            <li><button type="button" onClick={() => deleteProduct(item._id)}>delete</button>
                <Link to={`/update/${item._id}`}>Edit</Link>
            </li>

        </ul>

    )
        :
        <h1>No Product Found</h1>
}