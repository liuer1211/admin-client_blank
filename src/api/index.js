import ajax from "./ajax";

// 每个接口返回都是promise

const BASE = ''

// 登录
// export function reqLogin(username, password){
//     return ajax('/login', {username, password})
// }
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')