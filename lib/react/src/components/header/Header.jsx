import React, {Component} from 'react';

import './index.less';

import back from '../../asset/back.png';

class Header extends Component {
    render() {
        return(
            <div className="header">
                {
                    this.props.left ? (
                        <div onClick={() => this.props.history.goBack()}>
                            <img className="back" src={back} alt=""/>
                        </div>
                    ) : <div className="width4"/>
                }

                <div>{this.props.title}</div>

                <div className="width4"/>
            </div>
        )
    }
}

export default Header;
