import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../actions/userAction'

class User extends Component {
	componentDidMount(){
	   this.props.fetchUser(this.props.match.params.id)
	}

	componentWillUnmount(){
		this.props.user.name = ''
	}

	render() {
		console.log(this.props.user)
		return (
			<div>{this.props.user.name}</div>
		);
	}
}

const mapStateToProps = (state, ownProps)=>({
  user: state.user.user,
})

export default connect(mapStateToProps, {fetchUser})(User);