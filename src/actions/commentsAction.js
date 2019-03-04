export function fetchComments(id){
	return function(dispatch){
		//console.log(id)
		fetch('http://jsonplaceholder.typicode.com/comments?postId=' + id)
		.then(res => res.json())
		.then(data => dispatch({
			type: 'FETCH_COMMENTS',
			payload: data
		}))
	}
}

export function createComments(data){
	return function(dispatch){
		console.log('make')
		fetch('http://jsonplaceholder.typicode.com/comments',{
			method: 'POST',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify(data) 
		})
		.then(res => res.json())
		.then(post => dispatch({
			type: 'NEW_COMMENTS',
			payload: post
		}))
	}
}