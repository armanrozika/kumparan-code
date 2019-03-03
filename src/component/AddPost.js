import React, { Component } from 'react';
import {connect} from 'react-redux';

import {createPosts} from '../actions/postsAction'

class AddPost extends Component {
	state = {
		title: '',
		body: '',
	}

	onChange = (e)=>{
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	onSubmit = (e)=>{
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body,
			userId: this.props.newuid
		}

		//make post request
		this.props.createPosts(post)
		
	}

	render() {
		return (
			<div className="addpost">
				<form onSubmit={this.onSubmit} method="POST">
					<input onChange={this.onChange} type="text" name="title" placeholder="title"/><br/>
					<textarea onChange={this.onChange} type="text" name="body" placeholder="body"/><br/>
					<button type="submit">Add Post</button>
				</form>
			</div>
		);
	}
}


export default connect(null, {createPosts}) (AddPost);
