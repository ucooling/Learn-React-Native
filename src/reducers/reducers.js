import { combineReducers } from 'redux';
import { INCREASE, DECREASE, RESET } from '../actions/actionsTypes';

//原始默认的state
const defaultState = {
    count: 5,
    factor: 1
};

function counter(state=defaultState, action) {
    switch (action.type) {
        case INCREASE:
            return {...state, count:state.count + state.factor};
        case DECREASE:
            return {...state, count:state.count - state.factor};
        case RESET:
            return {...state, count: 0};
        default:
            return state;
    }
}

export default combineReducers({
    counter
})
