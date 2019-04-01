/*
 * @Description: 创建store的代码
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-27 13:28:11
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers,{initialState} from './reducers'

//applyMiddleware 调用各种中间体
let enhancer = applyMiddleware(thunk)

//添加日志支持
if (process.env.NODE_ENV === 'development') {
    enhancer = compose(
        applyMiddleware(thunk,createLogger())
    )
}

/**
 * 参数1：项目的reducers
 * 参数2：应用的初始化数据state
 * 参数3：使用的中间体
 */
let store = createStore(
    reducers,
    initialState,
    enhancer
)


export default store
