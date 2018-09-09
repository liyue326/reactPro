import React from 'react';
import Mutil from 'src/util/index.jsx';
import server from 'src/server/user.jsx';
const m = new Mutil();
const s = new server();
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            redirect: m.getUrlParam('redirect') || '/'

        }
    }
    componentWillMount(){
        document.title="登陆"
    }
    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,

        })
        //this.setState({}) not this.setState={key:value}
    }
    submit() {
        // console.log(m.getUrlParas('name'))
      
        s.login({
            username: this.state.userName,
            password: this.state.password
        }).then((res) => {
            window.location.href="/"
            localStorage.setItem('userInfo',JSON.stringify(res))
            this.props.history.push(this.state.redirect);
        }, (err) => { alert(2) });
    }
    // bind(this) 不加 state获取不到！
    render() {
        return (
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        用户名<input type="text" name="userName" onChange={(e) => { this.inputChange(e) }} />
                        密码<input type="text" name="password" onChange={(e) => { this.inputChange(e) }} />
                        <div>
                            <button type="submit" onClick={this.submit.bind(this)}> 提交</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;