import React from 'react'

import {
    Form,
    Select,
    Input
} from 'antd'

const Item = Form.Item
const Option = Select.Option

class AddForm extends React.Component {

    render() {

        const { getFieldDecorator } = this.props.form

        return (
            <Form>
                <Item>
                    {
                        getFieldDecorator('parentId', {
                            initialValue: '0'
                        })(
                            <Select>
                                <Option value='0'>电脑</Option>
                                <Option value='1'>家电</Option>
                                <Option value='2'>手机</Option>
                            </Select>
                        )
                    }
                </Item>
                <Item>
                    {
                        getFieldDecorator('categoryName', {
                            initialValue: ''
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