import React from 'react'
import { useState } from 'react'
import { TextField } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import { userPlus } from '../config/firebase'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async () => {
        await userPlus()
        console.log('fin')
    }
    
    return (
        <div>
            <Header />
            <form noValidate autoComplete="off">
                <TextField id="email" value={email} onChange={e => setEmail(e.target.value)} label="email" />
                <TextField id="password" value={password} onChange={e => setPassword(e.target.value)} label="password" variant="filled" />
            </form>
            <button onClick={handleClick}> CreateUser</button>
            <h1>Login</h1>
        </div>
    )
};


export default Login;

