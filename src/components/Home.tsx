import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"

/**
 * Home画面
 * 挨拶機能 + ナビゲーション機能
 * 感想
 * > ReactBootStrapを使用して、かっこよく実装できていると思います！
 *   一つアドバイスをすると、<br />タグは大きいアプリを作る時にあまり使用しません。JSXのコード量が多くなってしまうからです。
 *   改行はなるべくcssで行うのがGoodです！
 * @author maaya
 */
const Home: React.FC<{}> = () => {


    return (
        <div>
            <Header />
        </div>
    );
};

export default Home;
