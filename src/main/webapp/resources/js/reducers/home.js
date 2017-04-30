import { FETCH_USER_LIST } from '../actions/home'

// reducer其实也是一个方法而已，参数是state和action, 返回值是新的
const initialState = {}
export default function homeReducer(state=initialState, action) {
	switch (action.type) {
	case FETCH_USER_LIST:
		return Object.assign({}, state, {userList: action.payload})
	default:
		return state
	}
}