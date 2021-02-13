import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC<{}> = () => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const handleClick = () => {
        setValue(name)
    }

    return (
        <div>
            <h1>Home</h1>
            <br />
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>Button</Button>
            <br />
            <br />
            {
                value ? <h1>{value}さん、ようこそ！！</h1> : ""
            }
            <br />
            <Link to="PageA">PageA</Link> /
            <Link to="PageB">PageB</Link> /
            <Link to="Home">Homeに戻る</Link><br />
            <br />
        </div>
    );
};

export default Home;
