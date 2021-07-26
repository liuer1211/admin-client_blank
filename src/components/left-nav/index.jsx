import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

import menuList from '../../config/menuConfig';

import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component{

    /*
        根据menu的数据数组生成对应的标签数组 
        map + 递归调用
    */
    getMenuNodes = (menuList) => {
        return menuList.map(item=>{
            // 单个菜单
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else { // 含有子菜单
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {/* 递归 */}
                        { this.getMenuNodes(item.children) }
                    </SubMenu>
                )
            }
        })
    }

    /*
        根据menu的数据数组生成对应的标签数组 
        reduce + 递归调用
    */
    getMenuNodes_map = (menuList) => {
        return ;
    }


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
                    {/* <Menu.Item key="1">
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
                    </SubMenu> */}
                    {/* 获取菜单 */}
                    {
                        this.getMenuNodes(menuList)
                    }
                </Menu>
            </div>
        )
    }
}