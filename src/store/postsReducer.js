const initialState = {
	posts: [],
	post: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case 'FETCH_POSTS':
			return{
				...state,
				posts: action.payload
			};
		case 'NEW_POSTS':
			return{
				...state,
				post: action.payload
			}
		default:
			return state;
	}
}