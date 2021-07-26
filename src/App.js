import React, { Component } from 'react';
import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

/*
  应用的根组件
*/

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* 只匹配其中一个 */}
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    )
  }
}