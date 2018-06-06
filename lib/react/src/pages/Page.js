import React, {Component} from 'react';
import connect from '../store/connect';

import {Button} from 'antd';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {}

    render() {
        return (
            <section className="welcome">
                <h3>关于 this.props</h3>
                <pre>
                {JSON.stringify(this.props, undefined, 4)}
                </pre>
                <Button type="primary" onClick={() => this.props.history.goBack()}>返回</Button>
            </section>
        );
    }
};

export default connect(Page);