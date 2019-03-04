const initialState = {
    comments: [],
    comment: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case 'FETCH_COMMENTS':
			return{
				...state,
				comments: action.payload
			};
		case 'NEW_COMMENTS':
			return{
				...state,
				comment: action.payload
			}
		default:
			return state;
	}
}