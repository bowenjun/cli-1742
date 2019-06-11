import React, { Component } from 'react';

class ProcessBar extends Component {
    render() {

        let { backColor, width, height, rate } = this.props;

        const style = {
            backgroundColor: '#4C586B',
            width: width || '100%',
            height: height ? `${height}vw` : '4.8vw',
            borderRadius: height ? `${height / 2}vw` : '2.4vw',
            overflow: 'hidden',
            position: 'relative'
        };

        rate = rate ? rate : 1;
        const rateStyle = {
            backgroundColor: backColor || '#4C586B',
            width: width * rate || `${rate * 100}%`,
            height: height ? `${height}vw` : '4.8vw',
        };

        return(
            <div style={style}>
                <div className="flex-start">
                    <div style={rateStyle} />
                    {
                        rate < 0.96 && (
                            <div className="process-bar-line" style={{ height: height ? `${height}vw` : '4.8vw' }} />
                        )
                    }
                </div>
                <div className="process-bar">
                    <div className="flex-between process-bar-pad">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProcessBar;
