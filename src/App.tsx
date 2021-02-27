
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// style
import './App.css';

// components
import Home from './components/Home';
import PageA from './components/PageA';
import PageB from './components/PageB';

/**
 * ナビゲーションを管理
 * 感想
 * > ルーターがわかりやすく作成され、チームメンバーが円滑に開発をスタートできることと思います。
 * > コードも綺麗で特に修正するところがありません。すばらしい仕事です。
 * @author hatuki
 */
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/PageA" component={PageA} />
                <Route exact path="/PageB" component={PageB} />
            </Switch>
        </Router>
    );
}

export default App
