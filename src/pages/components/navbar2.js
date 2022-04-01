import Image from './frame.png';
import { Link } from 'react-router-dom'

function Nav2(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark px-4">
            <img className="navbar-brand" src={Image} alt="" style={{height: '10vh', width: '10vh'}} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/complain" className="nav-link">Complain</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category" className="nav-link">Category</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product" className="nav-link">Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav2;