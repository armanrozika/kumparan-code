const initialState = {
	photos: [],
}

export default function(state = initialState, action){
	switch(action.type){
		case 'FETCH_PHOTOS':
			return{
				...state,
				photos: action.payload
			};
		default:
			return state;
	}
}