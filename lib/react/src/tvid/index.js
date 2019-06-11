import React, { Component } from 'react';

export default class Index extends Component {

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
                    <span>TMSOJGNBUJIBYIfewfrv12rgvfgvfdxvds</span>
                    <span className="light">待激活</span>
                </p>
                <p className="label">
                    <span>我的奖励</span>
                    <a className="link" onClick={() => this.props.history.push('/t_vid_detail')}>邀请明细</a>
                </p>
                <div className="content">
                    <p className="sum">
                        <span>1,000</span>
                        <span>TVollar</span>
                    </p>
                    <ul className="sum-ul">
                        <li>
                            <span>类型</span>
                            <span>人数</span>
                            <span>直推人数</span>
                        </li>
                        <li>
                            <span>类型</span>
                            <span>人数</span>
                            <span>直推人数</span>
                        </li>
                        <li>
                            <span>类型</span>
                            <span>人数</span>
                            <span>直推人数</span>
                        </li>
                    </ul>
                </div>
                <p className="notice" style={{padding: '4vw 0 2vw'}}>邀请提示</p>
                <p className="notice">每邀请1位新人加入网络，可获得<span className="high">3.5 TVollar</span>的直推奖励；</p>
                <p className="notice">若下属成员邀请新成员加入，还可获得<span className="high">3.5 TVollar</span>的体系奖励，您当前可获得n层体系奖励。</p>
                <a className="btn">邀请好友</a>
                <p className="label">TVID名人榜</p>
                <div className="content">
                    <ul className="rank-ul">
                        <li className="th">
                            <span>排名</span>
                            <span>TVID</span>
                            <span>累计奖励</span>
                        </li>
                        <li>
                            <span>
                                <span>
                                    <img src={require('../asset/rank-1.png')} alt=""/>
                                </span>
                                <span>123</span>
                            </span>
                            <span>222</span>
                            <span>2333</span>
                        </li>
                        <li>
                            <span>
                                <span>
                                    <img src={require('../asset/rank-2.png')} alt=""/>
                                </span>
                                <span>123</span>
                            </span>
                            <span>222</span>
                            <span>2333</span>
                        </li>
                        <li>
                            <span>
                                <span>4</span>
                                <span>123</span>
                            </span>
                            <span>222</span>
                            <span>2333</span>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }

}
