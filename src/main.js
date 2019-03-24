/*
* @Description: 项目入口文件
* @Author: sunmingming
* @Email: sun_mingming@foxmail.com
* @Date: 2019-03-18 16:05:42
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import animation from './pages/animation';
import Home from './pages/Home'
import Blog from './pages/Blog'

import { Link, Route, Switch, HashRouter,hashHistory} from 'react-router-dom';
import 'antd/dist/antd.css';
import './main.css';


function Main() {
	return (
			<HashRouter history={hashHistory}>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path='/Blog' component={Blog}/>>

					<Route path='/animation' component={animation}/>>
				</Switch>
			</HashRouter>
			);
		}
		
ReactDOM.render(<Main />, document.getElementById('app'));
