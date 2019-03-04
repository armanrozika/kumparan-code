import React, { Component } from 'react';
import {connect} from 'react-redux';

import AddComments from './AddComments';
import {fetchComments} from '../actions/commentsAction'

class Comments extends Component {
  componentDidMount(){
    this.props.fetchComments(this.props.postid)
  }

  componentWillReceiveProps(nextProps){
		if(nextProps.newComment){
			this.props.comments.unshift(nextProps.newComment)
		}
  }
  
  render() {
    //console.log(this.props.comments)
    const commentList = this.props.comments.map(comment=>(
      <div key={comment.id}>
        <p className="comment__name">{comment.name} <i>says</i> :</p>
        <p className="comment__small">{comment.body}</p>
      </div>
    ))
    return (
      <div>
        {commentList}
        <AddComments/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments.comments,
  newComment: state.comments.comment
})
export default connect(mapStateToProps, {fetchComments}) (Comments);
