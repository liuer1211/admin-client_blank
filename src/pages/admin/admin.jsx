import React, { Component } from 'react';
import { Redirect } from 'react-router';

import memoryUtils from '../../utils/memoryUtils';

export default class Admin extends Component {
  render() {
    const user = memoryUtils.user
    // 当前没有用户
    if (!user || !user._id) {
      // 自动跳转登录
      return <Redirect to='/login'/>
    }
    return (
      <div>
        {user.username}
      </div>
    )
  }
}