import React, {Component} from 'react';
import connect from '../store/connect';

import {Button} from 'antd';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {}

    render() {
        return (
            <section className="welcome">
                <h3>欢迎使用 cli-1742 新建 react web/h5 端应用</h3>
                <Button type="primary" onClick={() => this.props.history.push('/page')}>react-router 4.0 with redux</Button>
            </section>
        );
    }
};

export default connect(Main);