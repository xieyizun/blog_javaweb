import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/home'
import * as HomeActions from '../actions/home'

// 将state.userList 绑定到 proprs的userList上
function mapStateToProps(state) {
	return {
		users: state.users
	}
}

// 将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	return bindActionCreators(HomeActions, dispatch)
}

// 通过react-redux提供的connect方法将我们需要的state中的
// 数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Home)