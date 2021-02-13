import React from 'react';
import { Link } from 'react-router-dom'

const PageB: React.FC<{}> = () => {

    return (
        <div>
            <h1>PageB</h1>
            <Link to="pageA">PageA</Link> /
            <Link to="Home">Homeへ戻る</Link>
        </div>
    );
};

export default PageB;
