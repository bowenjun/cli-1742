import React, {Component} from 'react';

import trx from '../../asset/trx.png';
import to from '../../asset/to.png';
import tvollar from '../../asset/tvollar.png';

class CountDown extends Component {
    render() {
        return(
            <div className="resonate">
                <div>
                    <div className="resonate-title">超共振交易启动倒计时</div>

                    <div className="card card-border flex-between">
                        <div className="resonate-count">
                            2
                            <span>D</span>
                        </div>

                        <div className="resonate-count">
                            23
                            <span>H</span>
                        </div>

                        <div className="resonate-count">
                            26
                            <span>M</span>
                        </div>

                        <div className="resonate-count">
                            26
                            <span>S</span>
                        </div>
                    </div>
                </div>

                <div className="mar-top-30">
                    <div className="resonate-title">超共振交易</div>

                    <div className="card card-dark">
                        <div className="resonate-images">
                            <img className="image1" src={trx} alt=""/>
                            <img className="image2" src={to} alt=""/>
                            <img className="image1" src={tvollar} alt=""/>
                        </div>

                        <div className="color-text line-height-25">
                            超共振兑换交易是通过TRX单向兑换TVollar的通道，TVDS超共振系统通过智能合约方式部署在波场Tron去中心化网络上。智能合约将针对注入TRX的地址进行核验和自动兑换TVollar操作，发起超共振兑换操作的TRC-20地址将会收到对应比例的TVollar。
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountDown;
