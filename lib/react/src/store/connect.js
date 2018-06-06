import {setInfo} from './actions';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';

export const mapStateToProps = (state) => {
	return {
		globalData: state.globalData
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		setInfo: (data) => {
			dispatch(setInfo(data))
		}
	}
};

export default (c) => withRouter(connect(mapStateToProps, mapDispatchToProps)(c));