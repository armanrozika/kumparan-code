import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {fetchPosts} from '../actions/postsAction'
import AddPost from './AddPost'

class Posts extends Component {
	state = {
		title: '',
		body: ''
	}

	componentDidMount(){
		this.props.fetchPosts()
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.newPost){
			this.props.posts.unshift(nextProps.newPost)
		}
	}

	render() {
		//console.log(this.props.posts)
		const postLists = this.props.posts.map((post)=>{
			if(post.userId == this.props.userid){
				return (
					<Link key={post.id} to={"/singlepost/" + post.id}>
						<p className="posts" >{post.title}</p>
					</Link>
				)
			}
		})
		return (
			<div>
				<h2>POSTS</h2>
				<AddPost newuid={this.props.userid}/>
				{postLists}
			</div>
		);
	}
}

const mapStateToProps = (state)=>({
  posts: state.posts.posts,
  newPost: state.posts.post
})

export default connect(mapStateToProps, {fetchPosts}) (Posts);
