import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';

import menuList from '../../config/menuConfig';

import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

class LeftNav extends Component{

    /*
        根据menu的数据数组生成对应的标签数组 
        map + 递归调用
    */
    getMenuNodes_map = (menuList) => {
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
                        { this.getMenuNodes_map(item.children) }
                    </SubMenu>
                )
            }
        })
    }

    /*
        根据menu的数据数组生成对应的标签数组 
        reduce + 递归调用
    */
    getMenuNodes = (menuList) => {
        // 得到当前路径
        const path = this.props.location.pathname

        return menuList.reduce((pre,item)=>{
            // pre添加<menu.Item>
            if (!item.children) {
                pre.push(
                    (<Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>)
                )
            } else { // pre添加<SubMenu>

                // 当前子菜单选中，并是打开状态，刷新页面，会被闭合--解决这个bug
                // 查找一个与当前请求路径匹配的子item
                // const citem = item.children.find(citem=>
                //     citem.key === path
                // )
                const citem = item.children.find(citem=>
                    path.indexOf(citem.key) === 0
                ) // 当前请求的是商品或其子路由界面

                // 如果存在，说明当前item的字列表需要打开
                if(citem) {
                    this.openKey = item.key;
                }
                
                pre.push(
                    (<SubMenu
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
                    </SubMenu>)
                )
            }
            return pre;
        },[])
    }

    /*
        在第一次render()之前执行一次
        为第一个render()准备数据（必须同步的）
    */
    componentWillMount() {
        // console.log(this)
        // 得到节点,先进行读节点---------
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render() {

        // 得到当前路径
        let path = this.props.location.pathname

        if(path.indexOf('/product')===0){ // 当前请求的是商品或其子路由界面
            path = '/product'
        }

        // 得到需要打开菜单项的key，再获得openKey-------
        const openKey = this.openKey

        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt='logo'/>
                    <h1>管理系统</h1>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
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
                        this.menuNodes
                    }
                </Menu>
            </div>
        )
    }
}
// withRouter,高阶组件：
// 包装非路由组件，返回一个新的组件
// 心得组件向非路由组件传递三个属性：history、location、match
export default withRouter(LeftNav)