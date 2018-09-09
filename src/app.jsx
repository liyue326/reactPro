import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import Home from 'page/home/home.jsx';
import Login from 'page/login/index.jsx';
import Error from 'page/error/index.jsx';
import Layout from 'component/Layout/index.jsx';
import UserList from 'page/user/index.jsx';
class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" render={props => <Layout>
                        {/* / 是全部匹配*/}
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/user/index" component={UserList} />
                            <Redirect exact from="/order" to="/order/index" />
                            <Redirect exact from="/user" to="/user/index" />
                            <Route component={Error} />
                            {/* <Route path="/product" component={ProductRouter}/>
                                <Route path="/product-category" component={ProductRouter}/>
                                <Route path="/order/index" component={OrderList}/>
                                <Route path="/order/detail/:orderNumber" component={OrderDetail}/>
                                <Route path="/user/index" component={UserList}/>
                                <Redirect exact from="/order" to="/order/index"/>
                                <Redirect exact from="/user" to="/user/index"/>
                                <Route component={ErrorPage}/> */}
                        </Switch>
                    </Layout>} />
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);