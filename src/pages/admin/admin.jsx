import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils';

import LeftNav from '../../components/left-nav';
import Header from '../../components/header';

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../chart/bar'
import Line from '../chart/line'
import Pie from '../chart/pie'

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
          <Content style={{margin: 20,backgroundColor: '#fff'}}>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/role' component={Role}/>
              <Route path='/user' component={User}/>
              <Route path='/chart/bar' component={Bar}/>
              <Route path='/chart/line' component={Line}/>
              <Route path='/chart/pie' component={Pie}/>
              <Redirect to='/home'/>
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center'}}>2021-07-25注册使用</Footer>
        </Layout>
      </Layout>
    )
  }
}