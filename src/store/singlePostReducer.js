const initialState = {
	post: [],
}

export default function(state = initialState, action){
	switch(action.type){
		case 'FETCH_POST':
			return{
				...state,
				post: action.payload
			}
		default:
			return state;
	}
}