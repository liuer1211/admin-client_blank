import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd';

import {formateDate} from '../../utils/dateUtils'
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import menuList from "../../config/menuConfig"

import {reqWeather} from "../../api/index"

import './index.less'

class Header extends Component{

    state = {
        currentTime: formateDate(Date.now()),
        dayPictureUrl: '',
        weather: '',
    }

    // 更新时间
    getTime = () => {
        this.interId = setInterval(()=>{
            const currentTime = formateDate(Date.now());
            this.setState({currentTime})
        },1000)
    }

    // 更新天气
    getWeather= async () => {
        // 获得接口数据
       const {dayPictureUrl, weather} = await reqWeather('上海')
       this.setState({dayPictureUrl, weather})
    }

    // 获得title
    getTitle = ()=> {
        const path = this.props.location.pathname
        let title = ''
        menuList.forEach(item=>{
            if (item.key === path) {
                title = item.title;
            } else if (item.children) {
                const it = item.children.find(it => it.key===path)
                if (it) {
                    title = it.title;
                }
            }
        })
        return title;
    }

    outLogin= () => {
        Modal.confirm({
            title: '确定退出吗？',
            onOk: ()=>{
                storageUtils.removeUser()
                memoryUtils.user={}
                this.props.history.replace('/login')
            }
        })
    }
    

    // 第一次render（）后执行一次
    // 一般再次执行异步操作：发Ajax请求、启动定时器
    componentDidMount() {
        // 获得时间
        this.getTime();
        // 获得天气
        this.getWeather();
    }

    // 当前组件卸载前执行
    componentWillUnmount() {
        // 清除定时器
        clearInterval(this.interId)
    }

    render() {

        const {currentTime, dayPictureUrl, weather} =this.state

        const user = memoryUtils.user.username

        const title = this.getTitle(); // 要在这里获取，切换时会执行这里，不执行其他钩子函数，不能写在state里

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{user}</span>
                    <span onClick={this.outLogin}>退出</span>
                </div>
                <div className="header-bot">
                    <div className="header-bot-l">{title}</div>
                    <div className="header-bot-r">
                        <span className="header-bot-r-sp1">{currentTime}</span>
                        <img src={dayPictureUrl} alt="天气" />
                        <span className="header-bot-r-sp2">{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)