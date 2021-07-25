import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils';

import LeftNav from '../../components/left-nav';
import Header from '../../components/header';

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    const user = memoryUtils.user
    // 当前没有用户
    if (!user || !user._id) {
      // 自动跳转登录
      return <Redirect to='/login'/>
    }
    return (
      <Layout style={{height: '100%'}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{backgroundColor: '#fff'}}>Content</Content>
          <Footer style={{textAlign: 'center'}}>2021-07-25注册使用</Footer>
        </Layout>
      </Layout>
    )
  }
}