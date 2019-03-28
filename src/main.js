/*
* @Description: 项目入口文件
* @Author: sunmingming
* @Email: sun_mingming@foxmail.com
* @Date: 2019-03-18 16:05:42
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import animation from './pages/animation';
import Blog from './pages/Blog';

import { Link, Route, Switch, HashRouter, hashHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import './main.css';
import store from './redux';


function Main() {
	return (
		<Provider store={store}>
			<HashRouter history={hashHistory}>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/Blog" component={Blog} />>
					<Route path="/animation" component={animation} />

				</Switch>
			</HashRouter>
		</Provider>
	);
}

ReactDOM.render(<Main />, document.getElementById('app'));
