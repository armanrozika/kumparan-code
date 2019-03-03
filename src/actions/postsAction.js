export function fetchPosts(){
	return function(dispatch){
		//console.log(id)
		fetch('http://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data => dispatch({
			type: 'FETCH_POSTS',
			payload: data
		}))
	}
}