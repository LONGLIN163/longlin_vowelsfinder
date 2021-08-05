import axios from "axios"

export const postData = (InputNum)=>{
    let baseUrl="http://localhost:3000";
    return axios({
        method:"post",
        url:baseUrl,
        data:{
            "input":InputNum
        },
        header:{ 'Access-Control-Allow-Origin':'*' }
    })
}