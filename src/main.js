
/*
* @Description: 项目入口文件
* @Author: sunmingming
* @Email: sun_mingming@foxmail.com
* @Date: 2019-03-18 16:05:42
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import './main.css';
function Main() {
    return (
        <HashRouter>
            <Route path="/" component={App} />
        </HashRouter>
    );
}

ReactDOM.render(<Main />, document.getElementById('app'));
            