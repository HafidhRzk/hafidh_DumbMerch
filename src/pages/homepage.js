import Nav from "./components/navbar"
import productData from "./components/productData"
import { Link } from 'react-router-dom'

function Homepage(){
    return(
        <div className="base">
            <div className="inbase">
                <Nav />
                <CardProduct />
            </div>
        </div>
    );
}

function CardProduct(){
    return(
        <div style={{margin: 'auto', padding: '10px'}}>
            <h2 className="textred">Product</h2>
            <div className="row">
                {productData.map((product) => (
                    <div className="col-2 px-3 py-3">
                        <Link to="/detail"><div className="card" style={{width: '13rem',}}>
                            <img className="card-img-top" src={product.image} alt="" />
                            <div className="card-body" style={{textAlign: 'left'}}>
                                <h5 className="card-title textred" >{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <p className="card-text">{product.stock}</p>
                            </div>
                        </div></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homepage;