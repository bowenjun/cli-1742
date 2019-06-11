import React, { Component } from 'react';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() { }

    render() {
        return (
            <section className="t-vid">
                <p className="label">TVID介绍</p>
                <div className="content">
                    <p className="desc">TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍TVID介绍</p>
                </div>
                <p className="btns">
                    <a className="normal">创建TVID</a>
                    <a className="pramary">领取TVID</a>
                </p>
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
