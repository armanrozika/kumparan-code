export function fetchUser(id){
	return function(dispatch, getState){
		//console.log(id)
		fetch('http://jsonplaceholder.typicode.com/users/' + id)
		.then(res => res.json())
		.then(data => dispatch({
			type: 'FETCH_USER',
			payload: data
		}))
	}
}