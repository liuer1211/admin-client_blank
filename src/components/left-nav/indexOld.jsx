import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component{
    render() {
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt='logo'/>
                    <h1>管理系统</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="dark"
                >
                    
                    <Menu.Item key="1">
                        <Link to='/home'>
                            <Icon type="pie-chart" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">
                            <Link to='/category'>
                                <Icon type="mail" />
                                <span>品类管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/product'>
                                <Icon type="mail" />
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="4">
                        <Link to='/role'>
                            <Icon type="pie-chart" />
                            <span>权限</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='/user'>
                            <Icon type="pie-chart" />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
                    
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>图表</span>
                            </span>
                        }
                    >
                        <Menu.Item key="6">
                            <Link to='/chart/pie'>
                                <Icon type="mail" />
                                <span>饼状图</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to='/chart/bar'>
                                <Icon type="mail" />
                                <span>柱状图</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to='/chart/line'>
                                <Icon type="mail" />
                                <span>折线图</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                </Menu>
            </div>
        )
    }
}