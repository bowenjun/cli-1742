import React, {Component} from 'react';

import { Link } from "react-router-dom";

import '../index.less';

import ProcessBar from '../components/Processbar';
import Input from '../components/Input';

class Resonate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
        }
    }

    render() {
        return(
            <div className="resonate">
                <div>
                    <div className="resonate-title">当前共振进度</div>

                    <div className="card card-light">
                        <div>
                            <div className="flex-between">
                                <ProcessBar width="84vw" backColor="#FDB54E" rate={0.8}>
                                    <div>1:1</div>
                                    <div>2151</div>
                                </ProcessBar>
                            </div>

                            <div className="flex-center mar-top-10">
                                <ProcessBar backColor="#3D495B" width="81.33vw">
                                    <div className="color-text">1:0.95</div>
                                    <div className="color-text">2100</div>
                                </ProcessBar>
                            </div>

                            <div className="flex-center mar-top-5">
                                <ProcessBar backColor="#353F51" width="78.67vw" height={4.53}>
                                    <div className="color-text">1:0.85</div>
                                    <div className="color-text">2050</div>
                                </ProcessBar>
                            </div>

                            <div className="flex-center" style={{ marginTop: '.53vw' }}>
                                <ProcessBar backColor="#2F3848" width="76vw" height={4.26} />
                            </div>

                            <div className="flex-center" style={{ marginTop: '.26vw' }}>
                                <ProcessBar backColor="#2F3848" width="73.33vw" height={4} />
                            </div>
                        </div>

                        <div>
                            <div className="resonate-text-line">
                                <div>当前比例剩余TVollar</div>

                                <div>125421.45 <span>TVollar</span></div>
                            </div>
                            <div className="resonate-text-line">
                                <div>共振池剩余TVollar</div>

                                <div>125421.45 <span>TVollar</span></div>
                            </div>
                            <div className="resonate-text-line">
                                <div>累计共振数量</div>

                                <div>125421.45 <span>TRX</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mar-top-30">
                    <div className="flex-between">
                        <div className="resonate-title">超共振交易</div>

                        <div className="resonate-sub-title">
                            <Link to={'/resonate_records'}>共振记录</Link>
                        </div>
                    </div>


                    <div className="card card-dark">
                        <div className="resonate-input-line">
                            <div>TRX共振数量</div>

                            <div>
                                <Input
                                    unit="TRX"
                                    value={this.state.amount}
                                    onChange={amount => this.setState({ amount })}
                                />
                            </div>
                        </div>

                        <div className="resonate-input-line">
                            <div>TVollar可得数量</div>

                            <Input disabled unit="TVollar" />
                        </div>

                        <div className="button mar-top-20">
                            立即共振（1：0.21）
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resonate;
