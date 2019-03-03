import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {fetchPosts} from '../actions/postsAction'

class Posts extends Component {
	componentDidMount(){
		this.props.fetchPosts()
	}
	render() {
		const postLists = this.props.posts.map((post)=>{
			if(post.userId == this.props.userid){
				return (
					<Link key={post.id} to="/">
						<p className="posts" >{post.title}</p>
					</Link>
				)
			}
		})
		return (
			<div>
				<h2>POSTS</h2>
				{postLists}
			</div>
		);
	}
}

const mapStateToProps = (state)=>({
  posts: state.posts.posts,
})

export default connect(mapStateToProps, {fetchPosts}) (Posts);
