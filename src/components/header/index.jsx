import React, {Component} from 'react'

import {formateDate} from '../../utils/dateUtils'
import memoryUtils from "../../utils/memoryUtils";

import {reqWeather} from "../../api/index"

import './index.less'

export default class Header extends Component{

    state = {
        currentTime: formateDate(Date.now()),
        dayPictureUrl: '',
        weather: '',
    }

    // 更新时间
    getTime = () => {
        setInterval(()=>{
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
    

    // 第一次render（）后执行一次
    // 一般再次执行异步操作：发Ajax请求、启动定时器
    componentDidMount() {
        // 获得时间
        this.getTime();
        // 获得天气
        this.getWeather();
    }

    render() {

        const {currentTime, dayPictureUrl, weather} =this.state

        const user = memoryUtils.user.username

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{user}</span>
                    {/* <a href="#">退出</a> */}
                </div>
                <div className="header-bot">
                    <div className="header-bot-l">首页</div>
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