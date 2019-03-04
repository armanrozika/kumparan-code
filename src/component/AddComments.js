import React, { Component } from 'react';
import {connect} from 'react-redux'

import {createComments} from '../actions/commentsAction';

class AddComments extends Component {
  state= {
    name: '',
    email: '',
    body: ''
  }
  onSubmit = (e)=>{
    e.preventDefault();

    const post = {
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    }

    this.props.createComments(post)
  }
  onChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="commentform">
            <input onChange={this.onChange} name="name" type="text" placeholder="name"/><br/>
            <input onChange={this.onChange} name="email" type="text" placeholder="email"/><br/>
            <textarea onChange={this.onChange} name="body" placeholder="messages"></textarea><br/>
            <button type="submit">Add comment</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {createComments}) (AddComments);