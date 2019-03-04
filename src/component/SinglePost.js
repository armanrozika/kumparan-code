import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/singlePostAction';
import Comments from './Comments'

class SinglePost extends Component {
	componentDidMount(){
		this.props.fetchPost(this.props.match.params.id)
	}

	componentWillUnmount(){
		this.props.post.title = ''
	}
	render() {
		return (
			<div>
				<h2>{this.props.post.title}</h2>
				<p>{this.props.post.body}</p>
				<h3 className="comments">Comments</h3>
				<Comments postid={this.props.match.params.id}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	post: state.post.post
})

export default connect(mapStateToProps, {fetchPost}) (SinglePost);