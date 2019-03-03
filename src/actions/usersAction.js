
export function fetchUsers(){
	return function(dispatch){
		// console.log('fetch')
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => dispatch({
			type: 'FETCH_USERS',
			payload: data
		}))
	}
}
