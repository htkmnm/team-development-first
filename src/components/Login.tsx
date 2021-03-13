import React from 'react'
import { useState } from 'react'
import { TextField } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import { userPlus, googleLogin } from '../config/firebase'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async () => {
        await userPlus()
        console.log('fin')
    }

    const handleGoogle = async () => {
        await googleLogin()
        console.log('Google Login Start')
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
            <button onClick={handleGoogle}>GoogleLogin</button>
        </div>
    )
};


export default Login;

