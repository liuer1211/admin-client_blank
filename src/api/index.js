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
// 修改商品分类
export const reqUpdateCategory= ({categoryName, categoryId}) => ajax(BASE + '/manage/category/update', {categoryName, categoryId}, 'post');

// 获取一个分类
export const reqCategory = (categoryId) => ajax(BASE + '/manage/category/info', {categoryId})

/*
搜索商品分页列表 (根据商品名称/商品描述)
searchType: 搜索的类型, productName/productDesc
 */
export const reqSearchProducts = ({pageNum, pageSize, searchName, searchType}) => ajax(BASE + '/manage/product/search', {
    pageNum,
    pageSize,
    [searchType]: searchName,
  })
// 获取商品分页列表
export const reqProducts = (pageNum, pageSize) => ajax(BASE + '/manage/product/list', {pageNum, pageSize})

// 更新商品的状态(上架/下架)
export const reqUpdateStatus = (productId, status) => ajax(BASE + '/manage/product/updateStatus', {productId, status}, 'POST')

// 添加/修改商品
export const reqAddOrUpdateProduct = (product) => ajax(BASE + '/manage/product/' + ( product._id?'update':'add'), product, 'POST')



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