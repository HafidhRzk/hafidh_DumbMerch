import Intro from './components/intro';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register (){

    return(
        <div className='base'>
            <div style={{display: 'flex'}}>
                <Intro />
                <Loginform />
            </div>
        </div>
    );
}

function Loginform (){

    const navigate = useNavigate();

    const [state, setState] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    const handleOnChange = (e) => {
        console.log(`${e.target.name}: ${e.target.value}`);
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(state);

        navigate('/');
    };

    return(
    <div style={{flex: '30%', display: 'flex',}}>
        <div className="card">
            <form className="container mx-auto my-3" onSubmit={handleOnSubmit}>
                <h2 style={{textAlign: 'left', marginBottom: '30px',}}>Register</h2>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Name" 
                    onChange={handleOnChange} value={state.fullname} name="fullname"/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter email" 
                    onChange={handleOnChange} value={state.email} name="email"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" 
                    onChange={handleOnChange} value={state.password} name="password"/>
                </div>
                <a href="/" onClick={handleOnSubmit}>
                    <button className="button" style={{backgroundColor: 'red', width: '100%'}}>Register</button>
                </a>
            </form>
        </div>
    </div>
    );
}

export default Register;