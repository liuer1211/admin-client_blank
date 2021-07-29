## 介绍
    react 管理台项目

# 访问
    manifest.json 中配置 "start_url": "./index.html"
    package.json 中配置 "homepage": "./" 
    在github中设置访问地址，然后即可访问
   [点我访问](https://liuer1211.github.io/admin-client_blank/build)
    

## 基本操作
    yarn install
    yarn start
    yarn build

## 依赖添加
    1. 基本-脚手架初始
        "react": "^16.8.6",
        "react-dom": "^16.8.6",
        "react-scripts": "3.0.1"
    2. antd 相关
        2.1 UI
            yarn add antd
        2.2 按需打包
            yarn add react-app-rewired customize-cra babel-plugin-import
        2.3 创建：  config-overrides.js
            加入：  const {override, fixBabelImports} = require('customize-cra');
                    module.exports = override(
                        fixBabelImports('import', {
                            libraryName: 'antd',
                            libraryDirectory: 'es',
                            style: 'css',
                        }),
                    );
            修改配置: package.json
                "scripts": {
                    "start": "react-app-rewired start",
                    "build": "react-app-rewired build",
                    "test": "react-app-rewired test",
                    "eject": "react-scripts eject"
                },
        2.4 自定义 antd 主题
                yarn add less less-loade
            修改 config-overrides.js
                module.exports = override(
                    // 针对antd实现按需打包，根据import来打包（使用babel-plugin-import）
                    fixBabelImports('import', {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: true, // 自动打包相关的样式
                    }),
                    // 使用less-loader对源码中的less的变量进行重新指定
                    addLessLoader({
                        javascriptEnabled: true,
                        modifyVars: {'@primary-color': '#1DA57A'},
                    }),
                );
    3. 路由
        下载路由包: yarn add react-router-dom

    4. axios
        下载：npm install axios
        封装axios,后台交互

    5. 跨域 (fetch,xml)
        代理配置："proxy": "http://localhost:5000"
    
    6. 缓存store
        下载：npm install store

    7. 后端项目
        npm i
        npm start

# 页面
    1. login 登录
        引入antd
        表单验证: antd自带控件
        高阶函数
        高阶组件

    2. admin 首页后台
        layout 布局
            菜单栏：
                菜单Ui使用
                多个路由菜单，动态生成: 循环渲染
                非路由组件，变成一个路由组件：withRouter
                根据menu的数据数组生成对应的标签数组：reduce + 递归调用
                componentWillMount():
                    在第一次render()之前执行一次
            头部:
                天气预报：百度-自行申请key
                下载：yarn add json; 跨域
                时间：定时器
                componentDidMount():
                    第一次render（）后执行一次
                    一般再次执行异步操作：发Ajax请求、启动定时器
            内容: 
                多个路由菜单，指向对应页面
                


    40