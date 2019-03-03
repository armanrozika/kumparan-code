import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUsers} from '../actions/usersAction'

class Users extends Component {
  componentDidMount(){
    this.props.fetchUsers()
  }

  render() {
    //console.log(this.props)
    const userList = this.props.users.map(user=>(
      <Link  key={user.id} to={'/user/' + user.id}>
        <div className="users__link">
          {user.name}
        </div>
      </Link>
    ))

    return (
      <div>
       {userList}
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
  users: state.users.users
})

export default connect(mapStateToProps, {fetchUsers})(Users);