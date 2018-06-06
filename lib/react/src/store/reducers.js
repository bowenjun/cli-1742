import {combineReducers} from 'redux';
import {INFO} from './actionsTypes';

let reducer = {
  globalData: (state = {
    info: {}
  }, action) => {
    switch (action.type) {
      case INFO:
        return {
          ...state,
          info: action.data
        };
      default:
        return state;
    }
  }
};

export default combineReducers(reducer);
