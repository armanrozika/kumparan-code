import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../actions/userAction'
import Posts from './Posts'

class User extends Component {
	componentDidMount(){
	   this.props.fetchUser(this.props.match.params.id)
	}

	componentWillUnmount(){
		this.props.user.name = ''
		this.props.user.email = ''
		this.props.user.username = ''
		this.props.user.phone = ''
		this.props.user.website = ''
	}

	render() {
		//console.log(this.props.user)
		return (
			<div className="user">
				<div className="user__detail">
					<h3>{this.props.user.name}</h3>
					<p>Username: {this.props.user.username}</p>
					<p>Email: {this.props.user.email}</p>
					<p>Phone: {this.props.user.phone}</p>
					<p>Website: {this.props.user.website}</p>
				</div>
				<Posts userid={this.props.match.params.id}/>
			</div>
		);
	}
}

const mapStateToProps = (state)=>({
  user: state.user.user,
})

export default connect(mapStateToProps, {fetchUser})(User);