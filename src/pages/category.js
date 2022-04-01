import Nav2 from "./components/navbar2"
import productData from "./components/productData"

function Category(){
    return(
        <div className="base">
            <div className="inbase">
                <Nav2 />
                <ListCategory />
            </div>
        </div>
    );
}

function ListCategory(){
    return(
        <div style={{display: 'flex', margin: 'auto', padding: '10px'}}>
            <div style={{padding: '10px', width: '100%'}}>
                <div style={{padding: '30px'}}>
                    <h2 className="textred">List Category</h2>
                </div>
                <div>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData.map((product) => (
                                <tr>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.name}</td>
                                    <td>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <div className="px-1">
                                                <button type="button" className="btn btn-success btn-block px-4 mx-auto">Edit</button>
                                            </div>
                                            <div className="px-1">
                                                <button type="button" className="btn btn-danger btn-block px-4 mx-auto">Delete</button>
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

export default Category;