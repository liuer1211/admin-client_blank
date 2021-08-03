import ajax from "./ajax";
// import jsonp from 'jsonp'
// import { message } from "antd";

// 每个接口返回都是promise

const BASE = ''

// 登录
// export function reqLogin(username, password){
//     return ajax('/login', {username, password})
// }
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')

// 商品分类 一级、二级
export const reqCategorys= (parentId) => ajax(BASE + '/manage/category/list', {parentId});
// 添加商品分类
export const reqAddCategory= (categoryName, parentId) => ajax(BASE + '/manage/category/add', {categoryName, parentId}, 'post');
// 添加商品分类
export const reqUpdateCategory= ({categoryName, parentId}) => ajax(BASE + '/manage/category/update', {categoryName, parentId}, 'post');






// jsonp 请求的接口请求函数
// 天气信息

export const reqWeather = (city) => {
    return {dayPictureUrl: 'http://api.map.baidu.com/images/weather/day/qing.png', weather: '晴'};
    // return new Promise((resolve, reject)=>{
    //     const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=6c0621701e4f8f0327b48bff7d67291e`;
    //     jsonp(url, {}, (err,data)=>{
    //         if(!err && data.status === 'success') {
    //             const {dayPictureUrl, weather} = data.results[0].weather_data[0];
    //             resolve({dayPictureUrl, weather});
    //         } else {
    //             // 异常传出，可以在各自的方法上做为伪数据 - 这块方便演示查看
    //             reject(err);
    //             message.error(err.message);
    //         }
    //     })
    // })
}