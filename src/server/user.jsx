import mUtil from 'util/index.jsx'
const m = new mUtil();
class user {
    login(para) {
        return m.httpPost({
            url: '/manage/user/login.do',
            type: 'post',
            data: para
        })
        // return 不能单独一行！

    }
    logout() {
        return m.httpPost({
            url: '/user/logout.do',
            type: 'post',

        })
    }
    getCount(){
        return m.httpPost({
            url: '/manage/statistic/base_count.do',
            type:'post'
        })
    }
    getUserList(pageNum){
        return m.httpPost({
            type    : 'post',
            url     : '/manage/user/list.do',
            data    : {
                pageNum : pageNum
            }
        });
    }

}
export default user;