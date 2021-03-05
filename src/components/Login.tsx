import React from 'react'
import { useState } from 'react'
import firebase from '../config/firebase'
import { TextField } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((Users) => {
                console.log(Users)
            })
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
}


export default Login

