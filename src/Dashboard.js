import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';

import Users from './component/Users'
import User from './component/User'
import SinglePost from './component/SinglePost'


class Dashboard extends Component {
  render() {
    //console.log(this.props)
    return (
      <HashRouter>
        <div className="dashboard">
          <div className="dashboard__title">
            <h1>PEOPLE PAGE</h1>
          </div>
          <Route exact path="/" component={Users}></Route>
          <Route path="/user/:id" component={User}></Route>
          <Route path="/singlepost/:id" component={SinglePost}></Route>
        </div>
      </HashRouter>
      
    );
  }
}


export default Dashboard;
