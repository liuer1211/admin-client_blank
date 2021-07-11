## 介绍
    react 管理台项目

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

# 页面
    1. login 登录
        引入antd
        表单验证
        高阶函数
        高阶组件

    14