export function fetchPost(id){
	return function(dispatch){
		//console.log(id)
		fetch('http://jsonplaceholder.typicode.com/posts/' + id)
		.then(res => res.json())
		.then(data => dispatch({
			type: 'FETCH_POST',
			payload: data
		}))
	}
}