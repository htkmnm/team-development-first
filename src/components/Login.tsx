import React from 'react'
import { useState } from 'react'
import firebase from '../config/firebase'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                // Signed in
                // ...
            })
    }


    return (
        <div>
            <textarea id="email" value={email} onChange={e => setEmail(e.target.value)}></textarea>
            <textarea id="password" value={password} onChange={e => setPassword(e.target.value)}></textarea>
            <button onClick={handleClick}> CreateUser</button>
            <h1>Login</h1>
        </div>
    )
}


export default Login

