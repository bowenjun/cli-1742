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
                <p className="notice" style={{padding: '4vw 0 2vw'}}>提示</p>
                <p className="notice">当前TVID为<span className="high">待激活TVID</span>，在TRON区块高度88777前邀请好友注册TVID即可完成TVID的激活。</p>
                <p className="notice">若TVID未在规定块高前激活，则该TVID将被系统回收。</p>
                <a className="btn">领取</a>
            </section>
        )
    }

}
