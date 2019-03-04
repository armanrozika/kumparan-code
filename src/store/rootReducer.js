import {combineReducers} from 'redux';
import usersReducers from './usersReducers';
import userReducers from './userReducers';
import singlePostReducer from './singlePostReducer'
import albumsReducer from './albumsReducer';
import postsReducers from './postsReducer';
import commentsReducer from './commentsReducer';
import photoReducer from './photoReducer'

export default combineReducers({
	users: usersReducers,
	user: userReducers,
	albums: albumsReducer,
	posts: postsReducers,
	post: singlePostReducer,
	comments: commentsReducer,
	photos: photoReducer
})