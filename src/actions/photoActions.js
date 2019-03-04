export function fetchPhotos(id){
	return function(dispatch){
		//console.log(id)
		fetch('http://jsonplaceholder.typicode.com/photos?albumId=' + id)
		.then(res => res.json())
		.then(data => dispatch({
			type: 'FETCH_PHOTOS',
			payload: data
		}))
	}
}