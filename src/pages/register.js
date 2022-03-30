import Intro from './components/intro';

function Register (){
    return(
        <div style={{display: 'flex'}}>
            <Intro />
            <Loginform />
        </div>
    );
}

function Loginform (){
    return(
    <div style={{flex: '30%', display: 'flex',}}>
        <div className="card">
            <form className="container mx-auto my-3">
                <h2 style={{textAlign: 'left', marginBottom: '30px',}}>Register</h2>
                <div className="mb-3">
                    <input type="Nama" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                    <input type="Email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button className="button" style={{backgroundColor: 'red', width: '100%'}}>Register</button>            
            </form>
        </div>
    </div>
    );
}

export default Register;