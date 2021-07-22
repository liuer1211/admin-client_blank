import axios from "axios";
import { message } from "antd";

export default function ajax(url,data={},type='GET'){

    return new Promise((res,rej)=>{
        let promise
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }
        promise.then(resp=>{
            res(resp.data)
        }).catch(err=>{
            // 异常传出，可以在各自的方法上做为伪数据 - 这块方便演示查看
            rej(err)
            message.error(err.message)
        })
        
    })
    
}