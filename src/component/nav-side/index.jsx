/*
* @Author: Rosen
* @Date:   2018-01-23 20:00:02
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:43:14
*/
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavSide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navbar-default navbar-side" style={{ marginTop: '20px' }}>
                <div className="sidebar-collapse">
                    <ul className="nav" style={{ display: 'block' }}>
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/">
                                <span>首页</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product-category" activeClassName="active-menu">品类管理</NavLink>
                        </li>


                        <li>
                            <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
                        </li>


                        <li>
                            <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        );
    }
}

export default NavSide;