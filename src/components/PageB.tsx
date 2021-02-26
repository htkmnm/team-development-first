import React from 'react';
import { useState } from 'react';

/**
 * PageB画面
 * 占い機能
 * 感想
 * > 占いのif文が綺麗に書けており、関数名omikujihandもなにをする関数なのか明確でGoodです。
 *   あとはPageBのところにPageB: React.FC<{}>とすると、後々の実装が楽になります！
 * @author hatuki
 */
const PageB = () => {
  const [omikuji, setOmikuji] = useState<string>('');

  const omikujihand = () => {
    const num = Math.floor(Math.random() * 6);
    if (num === 0) {
      setOmikuji('大吉');
    } else if (num === 1) {
      setOmikuji('末吉');
    } else if (num === 2) {
      setOmikuji('中吉');
    } else if (num === 3) {
      setOmikuji('小吉');
    } else if (num === 4) {
      setOmikuji('吉');
    } else if (num === 5) {
      setOmikuji('凶');
    } else {
      setOmikuji('大凶');
    }
  };
  return (
    <div>
      <h1>今日のおみくじ</h1>
      <button onClick={omikujihand}>今日の占い</button>
      {omikuji}
    </div>
  );
};

export default PageB;
