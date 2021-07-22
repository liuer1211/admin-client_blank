import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'

// 读取local保存的user,保存到内存里
const user = storageUtils.getUser()
memoryUtils.user = user

// 将App组件标签 渲染到index页面的div上
ReactDOM.render(<App />, document.getElementById('root'));

