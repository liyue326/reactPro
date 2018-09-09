// class mUtil extends React.Component(){
//     constructor(props){
//         super(props)
//     }

// }
class mUtil {
    httpPost(param) {
        return new Promise((resolve,reject) => {
            // 参数一定的加 不然抛不出去resolve，reject
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    // 数据请求成功 一定用尖头函数 不然this就是当前的了 获取不到外面的函数
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }
                    // 没有登录状态，强制登录
                    else if (10 === res.status) {
                        this.doLogin();
                    }
                    else {
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText);
                }
            })
        })

    }
    // 跳转登录
    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    // getUrlParas(para){
    //     // ?name=1&age=13
    //     let obj={}
    //     let search=window.location.search.split('?')[1]   //name=1&age=2
    //     let searchData=search.split('&'); //['name=1','age=2']
    //     searchData.map((items)=>{
    //        let item =items.split('=')    // ['name','1'] ['age',1]
         
           
    //         obj[item[0]]=item[1]
    //        console.log(obj[para])
    //         return obj[para]
           
    //     })
    // }
    getUrlParam(name){
        // param=123&param1=456
        let queryString = window.location.search.split('?')[1] || '',
            reg         = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result      = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
}
export default mUtil;