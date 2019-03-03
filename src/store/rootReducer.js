import {combineReducers} from 'redux';
import usersReducers from './usersReducers';
import userReducers from './userReducers';
// import albumsReducers from './albumsReducers';
import postsReducers from './postsReducer';
// import commentsReducers from './commentsReducers';

export default combineReducers({
	users: usersReducers,
	user: userReducers,
	// albums: albumsReducers,
	posts: postsReducers
	// comments: commentsReducers
})