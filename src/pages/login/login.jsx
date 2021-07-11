import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './login.less'

const Item = Form.Item // 不能写到import前

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // form对象
    const form = this.props.form
    // 获取表单数据
    const values = form.getFieldsValue()
    const val = form.getFieldValue()
    console.log(form)
    console.log(values)
    console.log(val)
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  };

  render() {
    const form = this.props.form
    const {getFieldDecorator} = form

    return (
      // 主体
      <div className="login-main">
        <div className="login-model">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {
                getFieldDecorator('username', {
                  
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
              <Button type="primary" htmlType="submit" className="login-form-button">
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
登录的路由组件
*/
const WrapLogin = Form.create()(Login)
export default WrapLogin

// 前台表单验证
// 手机表单输入数据