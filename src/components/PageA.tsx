import React from 'react';
import { Link } from 'react-router-dom'

const PageA: React.FC<{}> = () => {

    return (
        <div>
            <h1>PageA</h1>
            <Link to="PageB">PageB</Link> /
            <Link to="Home">Homeへ戻る</Link>
        </div>
    );
};

export default PageA;
