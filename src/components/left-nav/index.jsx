import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './index.less'



export default class LeftNav extends Component{
    render() {
        return (
            <Link to='/' className="left-nav">
                <header className="left-nav-header">
                    <img src={logo}/>
                    <h1>管理系统</h1>
                </header>
            </Link>
        )
    }
}