import React, { Component } from 'react';

export default class Ico extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() { }

    render() {
        return (
            <section className="t-vid">
                <p className="label">我的TVID</p>
                <p className="content flex-between">
                    <span>xxxx</span>
                    <a className="down">
                        <img src={require('../asset/down.png')} alt=""/>
                    </a>
                </p>
                <p className="label">邀请人地址</p>
                <p className="content">
                    <input type="text" className="input"/>
                </p>
                <p className="label">激活方式</p>
                <div className="content">
                    <div className="item">
                        <span>TVDS支付</span>
                        <span>
                            <span>10</span>
                            <a>
                                <img src={require('../asset/checkbox.png')} alt=""/>
                            </a>
                        </span>
                    </div>
                    <div className="item">
                        <span>
                            <span>TRX支付</span>
                            <a>
                                <img src={require('../asset/info.png')} alt=""/>
                            </a>
                        </span>
                        <span>
                            <span>20</span>
                            <a>
                                <img src={require('../asset/checkbox-in.png')} alt=""/>
                            </a>
                        </span>
                    </div>
                </div>
                <a className="btn">创建</a>
            </section>
        )
    }

}
