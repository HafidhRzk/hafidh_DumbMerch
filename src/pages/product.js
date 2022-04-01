import Nav2 from "./components/navbar2"
import productData from "./components/productData"

function Product(){
    return(
        <div className="base">
            <div className="inbase">
                <Nav2 />
                <ListProduct />
            </div>
        </div>
    );
}

function ListProduct(){
    return(
        <div style={{display: 'flex', margin: 'auto', padding: '10px'}}>
            <div style={{padding: '10px', width: '100%'}}>
                <div style={{padding: '30px'}}>
                    <h2 className="textred">List Product</h2>
                </div>
                <div>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Desc</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData.map((product) => (
                                <tr>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.name}.jpg</td>
                                    <td>{product.name}</td>
                                    <td>{product.desc}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <div className="px-1">
                                                <button type="button" className="btn btn-success btn-block px-4">Edit</button>
                                            </div>
                                            <div className="px-1">
                                                <button type="button" className="btn btn-danger btn-block px-4">Delete</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Product;