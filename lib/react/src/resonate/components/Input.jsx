import React, {Component} from 'react';

class Input extends Component {
    onChange = (v) => {
        this.props.onChange && this.props.onChange(v.target.value);
    };

    render() {
        return(
            <div className="input">
                <input
                    disabled={this.props.disabled}
                    type="number"
                    onChange={this.onChange}
                    value={this.props.value}
                />

                <div className="color-text mar-left-5">{this.props.unit}</div>
            </div>
        )
    }
}

export default Input;
