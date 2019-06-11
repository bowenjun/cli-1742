import React, { Component } from 'react';

import '../index.less';
import Header from '../../components/header';
import empty from '../../asset/empty.png';

class Records extends Component {
    render() {
        return(
            <div className="content">
                <Header left title="共振记录" history={this.props.history}/>

                <div className="resonate">
                    <div className="flex-between color-text">
                        <div>时间</div>
                        <div>共振情况</div>
                    </div>

                    <div className="mar-top-5">
                        <div className="resonate-record">
                            <div>2019-06-03 12:12</div>

                            <div>
                                <div>1 : 0.95  12</div>
                                <div>1 : 0.95  12</div>
                            </div>
                        </div>

                        <div className="resonate-record">
                            <div>2019-06-03 12:12</div>

                            <div>
                                <div>1 : 0.95  12</div>
                            </div>
                        </div>
                    </div>

                    <div className="resonate-empty">
                        <img src={empty} alt=""/>
                        <div>暂无记录</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Records;
