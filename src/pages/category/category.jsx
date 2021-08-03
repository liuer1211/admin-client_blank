import React, { Component } from 'react';

import { Card, Button, Icon, Table  } from 'antd';

import LinkButton from '../../components/link-button';

export default class Category extends Component{

    render() {
        const title = '一级分类'
        const extra = (
            <Button type="primary">
                <Icon type="plus" />添加
            </Button>
        )

        const dataSource = [
            {
                parentId: '0',
                _id: '11111',
                name: '家用电器',
                _v: 0,
            },
            {
                parentId: '0',
                _id: '22222',
                name: '电脑',
                _v: 0,
            },
            {
                parentId: '0',
                _id: '33333',
                name: '家用电器',
                _v: 0,
            },
            {
                parentId: '0',
                _id: '44444',
                name: '电脑',
                _v: 0,
            },
            {
                parentId: '0',
                _id: '55555',
                name: '家用电器',
                _v: 0,
            },
          ];
          
          const columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '操作',
                dataIndex: '',
                width: 300,
                render: () =>(
                     <span>
                        <LinkButton>修改</LinkButton>
                        <LinkButton>查看子分类</LinkButton>
                    </span>
                )
            },
          ];
            
        return (
            <div>
                <Card title={title} extra={extra} >
                    <Table 
                        bordered
                        rowKey='_id'
                        dataSource={dataSource} 
                        columns={columns} 
                    />
                </Card>
            </div>
        )
    }
}