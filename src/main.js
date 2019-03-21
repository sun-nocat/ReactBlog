/*
* @Description: 项目入口文件
* @Author: sunmingming
* @Email: sun_mingming@foxmail.com
* @Date: 2019-03-18 16:05:42
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Anmation from './pages/animation/animation.js';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import './main.css';
function Main() {
	return (
		<Router>
			<Route path="/" component={Anmation} />
		</Router>
	);
}

ReactDOM.render(<Main />, document.getElementById('app'));
