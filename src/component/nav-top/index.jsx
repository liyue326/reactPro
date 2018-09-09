/*
* @Author: Rosen
* @Date:   2018-01-23 19:59:56
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 12:49:37
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import Mutil from 'src/util/index.jsx';
import server from 'src/server/user.jsx';
const m = new Mutil();
const s = new server();
class NavTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: JSON.parse(localStorage.getItem('userInfo')).username  // Json.parse(local)
        }
    }
    // 退出登录
    logout() {
        // 推出不用穿参数 是因为登陆时候后台把cookie中进了浏览器 JSESSIONID 推出时候后台会用JSESSIONID来跟踪用户信息
        s.logout({}).then(res => {
            localStorage.removeItem('userInfo');
            window.location.href = '/login'
        }, err => {

        })
    }
    render() {
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.username
                                    ? <span>欢迎，{this.state.username}</span>
                                    : <span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={() => { this.logout() }}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTop;