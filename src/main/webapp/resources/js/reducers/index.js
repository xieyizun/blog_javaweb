import { combineReducers } from 'redux'
import homeReducer from './home'
// 使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
	users: homeReducer
})

export default rootReducer