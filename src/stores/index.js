import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'

import reducer from '../reducers';

const win = window
const middleware = []


middleware.push(thunk)

const reduxEnhancers = compose(
	applyMiddleware(...middleware),
	(win && win.devToolsExtension ? win.devToolsExtension() : f => f)
)
/**
 * 返回创建store的函数  configStore()
 */
export default function configStore() {
	const store = createStore(reducer,{},reduxEnhancers);
	console.log('store.getState()')
	console.log(store.getState())
	return store;
}
