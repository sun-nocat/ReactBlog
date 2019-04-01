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
import Blog from './pages/Blog';
import List from './pages/Life'
import Work from './pages/Work'
import About from './pages/About'
import LifeItem from './pages/Life/components/LifeItem'

import { Route, Switch, HashRouter, hashHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import './main.css';
import store from './redux';

function Main() {
	return (
		<Provider store={store}>
			<HashRouter history={hashHistory}>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/Blog" component={Blog} />
					<Route exact path="/Life" component={List}/>
					<Route exact path="/Life/item" component={LifeItem}/>
					<Route path="/Work" component={Work} />
					<Route path="/About" component={About} />

				</Switch>
			</HashRouter>
		</Provider>
	);
}



ReactDOM.render(<Main />, document.getElementById('app'));
