import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link }     from 'react-router-dom';
import './index.scss';
import Mutil from 'src/util/index.jsx';
import server from 'src/server/user.jsx';
const m = new Mutil();
const s = new server();
class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userCount: '-',
            productCount: '-',
            orderCount: '-'
        }
    }
    componentWillMount(){
        this.loadCount();
    }
    loadCount(){
        s.getCount({pageSize:10,pageNum:1}).then((res)=>{
            this.setState(res)
            console.log(this.state)
        },err=>{alert("shibai")})
    }
    render() {
        return (

            <div id="page-wrapper">
                <PageTitle title="首页" >
                    <div>容器一样的组建 不仅可以传值 还能在里面写元素</div>
                </PageTitle><div className="row">
                    <div className="col-md-4">
                        <Link to="/user" className="color-box brown">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/product" className="color-box green">
                            <p className="count">{this.state.productCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>商品总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/order" className="color-box blue">
                            <p className="count">{this.state.orderCount}</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>订单总数</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
// page还得导出 shit!
export default home;