import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const { login, error, isLoading } = useLogin();
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // await login(email, password)
    }
    return (
        <div className='parent'>
            <div className="login-container">
                <h1 style={{ textAlign: 'center' }}>Login</h1>

                <div onSubmit={handleSubmit} className="login-form">


                    <label htmlFor="">Email</label>   <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Password</label> <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
                    <button style={{ margin: 'auto auto' }}>Login</button>
                </div>


            </div>

        </div>
    );
};

export default Login;