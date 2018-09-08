import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
class home extends React.Component {
    render(){
        return (
            <div id="page-inner">
                <PageTitle title="首页" >
                    <div>容器一样的组建 不仅可以传值 还能在里面写元素</div>
                 </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                    
                    </div>
                </div>
            </div>
        );
    }
}