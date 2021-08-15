import React from 'react'

import PropTypes from 'prop-types'

import {
    Form,
    Input
} from 'antd'

const Item = Form.Item

class UpdateForm extends React.Component {

    // 接收参数
    static propTypes = {
        categoryName: PropTypes.string.isRequired,
        setForm: PropTypes.func.isRequired
    }

    componentWillMount() {
        // 将form对象通过setForm()传递到父组件
        this.props.setForm(this.props.form)
        // console.log('---')
    }

    render() {

        // 读取参数
        const {categoryName} = this.props

        const { getFieldDecorator } = this.props.form

        return (
            <Form>
                分类名称
                <Item>
                    {
                        getFieldDecorator('categoryName', {
                            initialValue: categoryName,
                            rules: [
                                {
                                    required: true, message: '分类必输'
                                }
                            ]
                        })(
                            <Input placeholder='输入商品分类' />
                        )
                    }
                </Item>
            </Form>
        )
    }
}

export default Form.create()(UpdateForm)