import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Form, Icon, Input, Button, message } from 'antd';

import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

import './login.less'

const Item = Form.Item // 不能写到import前

class Login extends Component {
  // 提交
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      // 校验成功
      if (!err) {
        const {username, password} = values

        const data = {
          create_time: 1626874402124,
          password: "21232f297a57a5a743894a0e4a801fc3",
          role: {menus: []},
          menus: [],
          username: "admin",
          __v: 0,
          _id: "60f822221a00151314d2626a"
        }

        try {
          const result = await reqLogin(username, password)
          if (result.status===0) {
            message.success('登陆成功')

            const user = result.data
            // 存到内存里
            memoryUtils.user = user
            // 存到本地
            storageUtils.saveUser(user)

            console.log(user)

            // 不需要回退到登录
            // this.props.history.push('/')
            this.props.history.replace('/')
          } else {
            message.error(result.msg)
          }
        } catch (e) {
          // 获取伪数据
          message.error('接口异常-使用伪数据')
          // 存到内存里
          memoryUtils.user = data
          // 存到本地
          storageUtils.saveUser(data)
          // 跳转
          this.props.history.replace('/')
        }

      } else {
        console.log('校验失败')
      }
    });
    // // form对象
    // const form = this.props.form
    // // 获取表单数据
    // const values = form.getFieldsValue()
    // const val = form.getFieldValue()
    // console.log(form)
    // console.log(values)
    // console.log(val)
  };

  // 校验,其他写法
  validatePwd = (rule, value, callBack)=> {
    if (!value) {
      callBack('密码必输')
    } else if (value.length<4) {
      callBack('密码大于4位')
    } else if (value.length>12) {
      callBack('密码小于12位')
    } else if (!(/^[a-zA-Z0-9_]+$/.test(value))) {
      callBack('必须数字英文下划线')
    } else{
      callBack()
    }
  }

  render() {
    // 如果用户登录，跳转到首页
    const user = memoryUtils.user
    // 当前没有用户
    if (user && user._id) {
      // 自动跳转登录
      return <Redirect to='/'/>
    }

    // 得到具有强大功能的from对象
    const form = this.props.form
    const {getFieldDecorator} = form

    return (
      // 主体
      <div className="login-main">
        <div className="login-model">
          <div className="login-tit">用户登录</div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {
                getFieldDecorator('username', {
                  rules: [
                    { required: true, whitespace: true, message: '用户名必输' },
                    { min: 4, message: '最小4位' },
                    { max: 12, message: '最大12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '必须数字英文下划线' },
                  ],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
                )
              }
            </Item>
            <Item>
              {
                  getFieldDecorator('password', {
                    rules: [
                      { validator: this.validatePwd }
                    ],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />
                  )
                }
            </Item>
            <Item>
              <Button type="primary" block htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    )
  }
}

/*
  1. 高阶函数
    1). 一类特定的函数
      a. 接收函数类型的参数
      b. 返回值是函数
    2). 常见
      a. 定时器：setTimeout()/setInterval()
      b. Promise: Promise(()={}) then(value=>{},reason=>{})
      c. 数组遍历相关的方法： forEach()/filter()/map()/reduce()/find()/findIndex()
      d. 函数对象的bind()
      e. Form.create()() / getFieldDecorator()()
    3). 高阶函数更新动态，更加具有扩展性
  2. 高阶组件
    1). 本质就是一个函数
    2). 接收一个组件（被包装组件），返回一个新的组件（包装组建），包装组建会向被包装组件传入特定属性
    3). 作用：扩展组件的功能
    4). 高阶组件也是一个高阶函数：接受一个组件函数，返回一个新的组件函数
      
*/

/*
  登录的路由组件
  包装Form组件生成一个新的组件：Form（Login）
  新组件会向Form组件传递一个强大的对象属性：form
*/
const WrapLogin = Form.create()(Login)
export default WrapLogin

// 前台表单验证
// 手机表单输入数据