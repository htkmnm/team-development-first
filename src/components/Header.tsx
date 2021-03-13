import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Home画面
 * 挨拶機能 + ナビゲーション機能
 * 感想
 * > ReactBootStrapを使用して、かっこよく実装できていると思います！
 *   一つアドバイスをすると、<br />タグは大きいアプリを作る時にあまり使用しません。JSXのコード量が多くなってしまうからです。
 *   改行はなるべくcssで行うのがGoodです！
 * @author maaya
 */
const Header: React.FC<{}> = () => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const handleClick = () => {
        setValue(name);
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="PageA">PageA</Nav.Link>
                        <Nav.Link href="PageB">PageB</Nav.Link>
                        <Nav.Link href="Login">Login</Nav.Link>
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

export default Header;
