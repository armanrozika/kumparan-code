export function fetchAlbums(id){
	return function(dispatch){
		//console.log(id)
		fetch('http://jsonplaceholder.typicode.com/albums?userId=' + id)
		.then(res => res.json())
		.then(data => dispatch({
			type: 'FETCH_ALBUMS',
			payload: data
		}))
	}
}
