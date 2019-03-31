/*
* @Description: React根组件
* @Author: sunmingming
* @Email: sun_mingming@foxmail.com
* @Date: 2019-03-18 17:46:14
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home'

function App(props) {
	return <Home history={props.history} style={{height:'100%'}}></Home>
}

export default App;
