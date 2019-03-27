/*
 * @Description: 根reducer
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-27 13:44:24
 */

import { combineReducers } from 'redux';

import Blog from './blog';

//初始化的数据
export let initialState = {
	Blog: {
		article: ''
	}
};

//整合多个reducer
let reducers = combineReducers({
	Blog: Blog
});

export default reducers;
