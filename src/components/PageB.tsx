import React from 'react';
import { useState } from 'react';

const PageB = () => {

    const [omikuji, setOmikuji] = useState<string>('')

    const omikujihand = () => {
        const num = Math.floor(Math.random() * 6)
        if (num === 0) {
            setOmikuji('大吉')
        } else if (num === 1) {
            setOmikuji('末吉')
        } else if (num === 2) {
            setOmikuji('中吉')
        } else if (num === 3) {
            setOmikuji('小吉')
        } else if (num === 4) {
            setOmikuji('吉')
        } else if (num === 5) {
            setOmikuji('凶')
        } else {
            setOmikuji('大凶')
        }
    }


    return (
        <div>
            <h1>今日のおみくじ</h1>

            <button onClick={omikujihand}>今日の占い</button>
            {omikuji}
        </div>
    );
};

export default PageB;
