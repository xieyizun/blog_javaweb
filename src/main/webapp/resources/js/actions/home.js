import $ from 'jquery'

export const FETCH_USER_LIST = 'FETCH_USER_LIST'
export const FETCH_USER_INFO = 'FETCH_USER_INFO'
	
export function fetchUserList() {
	return (dispatch, getState) => {
		$.ajax({
            url: '/blog/users',
            dataType: 'json',
			success: (result) => {
				dispatch({
					type: FETCH_USER_LIST,
					payload: result.userList
				})
			}
		})
	}
}	