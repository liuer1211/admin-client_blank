import React, { Component } from 'react';

import { Card, Button, Icon, Table, message, Modal } from 'antd';

import LinkButton from '../../components/link-button';
import { reqCategorys } from '../../api';

export default class Category extends Component{

    state = {
        loading: false, // 列表loading
        categorys: [], // 列表数据
        subCategorys: [], // 二级分类列表
        parentId: '0', // 分类id
        parentName: '', // 分类名称
        showStatus: '0', // 弹出框显示隐藏 0：都隐藏；1：添加；2：更新
    }

    // 获得列表数据(一级、二级)
    getDate = async () => {
        try {
            // console.log(this.state)
            const {parentId} = this.state;
            this.setState({
                loading: true,
            })
            // 发请求
            const res = await reqCategorys(parentId);
            this.setState({
                loading: false,
            })

            if (res.status ===0) {
                // 取出分类数据；一级、或二级
                const categorys =res.data
                if (parentId === '0') {
                    // console.log('-1-',categorys)
                    this.setState({
                        categorys,
                    })
                } else {
                    // console.log('-2-')
                    this.setState({
                        subCategorys: categorys,
                    })
                }
            } else {
                message.error('获得分类列表失败')
            }
        } catch (e) {
            message.error('使用假数据！')
            const {parentId} = this.state;
            const categorys = [
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
                {
                    parentId: '0',
                    _id: '66666',
                    name: '家用电器',
                    _v: 0,
                },
            ];
            const subCategorys = [
                {
                    parentId: '0',
                    _id: '11111',
                    name: '家用电器1',
                    _v: 0,
                },
                {
                    parentId: '0',
                    _id: '22222',
                    name: '电脑1',
                    _v: 0,
                },
            ];
            if (parentId === '0') {
                this.setState({
                    categorys,
                })
            } else {
                this.setState({
                    subCategorys,
                })
            }
            this.setState({
                loading: false,
            })
        }
    }

    // 点击二级分类里边的一级分类标题
    showCate = () =>{
        this.setState(
            {
                parentId: '0', // 分类id
                subCategorys: [], // 二级分类列表
                parentName: '', // 分类名称
            }
        )
    }

    // table列表
    getInitColums = () => {
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '操作',
                dataIndex: '',
                width: 300,
                render: (category) =>(
                     <span>
                        <LinkButton onClick={()=>this.cateUpdate(category)}>修改</LinkButton>
                        {/* 
                            这种方式，进来会立即执行
                            <LinkButton onClick={this.getSubCate(category)}>查看子分类</LinkButton> 
                            这种写，进来不调，点击时候调，但不能传参数
                            <LinkButton onClick={this.getSubCate}>查看子分类</LinkButton> 
                            如何将事件回调函数，传递参数：先定义匿名函数，再函数调用处理的函数并传入数据
                        */}
                        {
                            this.state.parentId === '0' ? 
                            <LinkButton onClick={()=>this.getSubCate(category)}>查看子分类</LinkButton> : null
                        }
                    </span>
                )
            },
        ];
    }

    // 点击查看二级分类
    getSubCate = (category) => {
        // 更新状态，此方法为异步
        this.setState({
            parentId: category._id, // 分类id
            parentName: category.name, // 分类名称
        },()=>{
            // console.log(this.state)
            // 在状态更新且重新render()后执行
            // 二级分类列表
            this.getDate();
        })
        // console.log(this.state)
        // this.getDate();
    }

    // 添加
    cateAdd = () => {
        this.setState({showStatus: '1'})
    }

    // 更新
    cateUpdate = category => {
        this.setState({showStatus: '2'})
        console.log(category)
    }

    // 取消
    handleCancel = () => {
        this.setState({showStatus: '0'})
    }

    // 确定
    handleOk = () => {
        this.setState({showStatus: '0'})
    }

    // 为第一次render()准备数据
    componentWillMount() {
        this.getInitColums();
    }

    // 执行异步
    componentDidMount() {
        // 一级分类列表
        this.getDate();
    }

    render() {
        const {categorys, subCategorys, parentId, loading, parentName} = this.state
        // console.log(this.state)
        // console.log(this.props)

        // 这里的title 可以传 字符串 | dom节点
        const title = parentId === '0' ? '一级分类' : (
            <span>
                <LinkButton onClick={this.showCate}>一级分类</LinkButton>
                <Icon type="right"></Icon>
                {parentName}
            </span>
        )
        const extra = (
            <Button type="primary" onClick={this.cateAdd}>
                <Icon type="plus" />添加
            </Button>
        )

        return (
            <div>
                <Card title={title} extra={extra} >
                    <Table 
                        bordered
                        rowKey='_id'
                        loading={loading}
                        dataSource={parentId === '0' ? categorys : subCategorys} 
                        columns={this.columns} 
                        pagination={{defaultPageSize:5,showQuickJumper:true}}
                    />
                </Card>

                {/* 添加 */}
                <Modal
                    title="添加"
                    visible={this.state.showStatus==='1'}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                {/* 更新 */}
                <Modal
                    title="更新"
                    visible={this.state.showStatus==='2'}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}