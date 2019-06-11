import React, {Component} from 'react';

import '../index.less';
import Header from '../../components/header';
import Resonate from './Resonate';
import CountDown from './CountDown';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            startTime: 1570165681291
        }
    }

    render() {
        const { startTime } = this.state;

        return(
            <div className="content">
                <Header title="超共振交易" />

                {
                    startTime < new Date().getTime()
                        ? (<Resonate />)
                        : (<CountDown />)
                }
            </div>
        )
    }
}

export default Index;
