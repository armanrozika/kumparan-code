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

export function createPosts(data){
	return function(dispatch){
		console.log('make')
		fetch('http://jsonplaceholder.typicode.com/posts',{
			method: 'POST',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify(data) 
		})
		.then(res => res.json())
		.then(post => dispatch({
			type: 'NEW_POSTS',
			payload: post
		}))
	}
}