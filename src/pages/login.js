import React from 'react';
import Intro from './components/intro';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login (){
    return(
        <div style={{display: 'flex'}}>
            <Intro />
            <Loginform />
        </div>
    );
}

function Loginform (){
    return(
    <div className="card">
        <h3>Login</h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" size="lg" className="d-grid gap-2">Login</Button>
        </Form>
    </div>
    );
}

export default Login;