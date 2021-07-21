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
            // rej(err)
            message.error(err.message)
        })
        
    })
    
}