import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PageA画面
 * API取得
 * 感想
 * > この画面はアプリのViewを作成する上で、最も大切なJavaScriptの操作方法を学んでいただいております。
 *   難易度はかなり高めですが、がんばってください！
 * @author hatuki
 */
const PageA: React.FC<{}> = () => {
  return (
    <div>
      <h1>PageA</h1>
      <Link to="PageB">PageB</Link> /<Link to="Home">Homeへ戻る</Link>
    </div>
  );
};

export default PageA;
