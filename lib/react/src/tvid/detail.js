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
                <p className="label">邀请分布</p>
                <div className="content">
                    <ul className="ul">
                        <li className="th">
                            <span>层级</span>
                            <span>人数</span>
                            <span>直推人数</span>
                        </li>
                        <li>
                            <span>123</span>
                            <span>222</span>
                            <span>2333</span>
                        </li>
                        <li>
                            <span>123</span>
                            <span>222</span>
                            <span>2333</span>
                        </li>
                    </ul>
                </div>
                <p className="label">直推用户</p>
                <ul className="info-ul">
                    <li className="th">
                        <span>TVID</span>
                        <span>邀请时间</span>
                    </li>
                    <li>
                        <span>123</span>
                        <span>2333</span>
                    </li>
                    <li>
                        <span>123</span>
                        <span>2333</span>
                    </li>
                </ul>
            </section>
        )
    }

}
