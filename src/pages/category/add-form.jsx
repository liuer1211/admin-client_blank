import React from 'react'
import PropTypes from 'prop-types'

import {
    Form,
    Select,
    Input
} from 'antd'

const Item = Form.Item
const Option = Select.Option

class AddForm extends React.Component {

    static propTypes = {
        categorys : PropTypes.array.isRequired, // 一级分类列表
        parentId: PropTypes.string.isRequired, // 父分类id
        setForm: PropTypes.func.isRequired //用来传递form对象的函数
    }

    componentWillMount() {
        // 将form对象通过setForm()传递到父组件
        this.props.setForm(this.props.form)
        // console.log('---')
    }

    render() {

        const { getFieldDecorator } = this.props.form
        const { categorys,parentId } = this.props

        return (
            <Form>
                所属分类
                <Item>
                    {
                        getFieldDecorator('parentId', {
                            initialValue: parentId,
                        })(
                            <Select>
                                <Option value='0'>一级分类</Option>
                                {/* 
                                <Option value='1'>家电</Option>
                                <Option value='2'>手机</Option> */}
                                {
                                    categorys.map( c =>(
                                        <Option key={c._id} value={c._id}>{c.name}</Option>
                                    ) )
                                }
                            </Select>
                        )
                    }
                </Item>
                分类名称
                <Item>
                    {
                        getFieldDecorator('categoryName', {
                            initialValue: '',
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

export default Form.create()(AddForm)