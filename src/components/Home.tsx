import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC<{}> = () => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const handleClick = () => {
        setValue(name)
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Hoom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="PageA">PageA</Nav.Link>
                        <Nav.Link href="PageB">PageB</Nav.Link>
                    </Nav>
                    <FormControl type="name" placeholder="name" className="mr-sm-2" value={name} onChange={e => setName(e.target.value)} />
                    <Button variant="outline-success" type="submit" onClick={handleClick}>WELCOM</Button>
                </Navbar.Collapse>
            </Navbar>
            <br />
            {
                value ? <h1>{value}さん、ようこそ！！</h1> : ""
            }
        </div>
    );
};

export default Home;
