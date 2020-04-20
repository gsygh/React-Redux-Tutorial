import {createStore} from 'redux';

// 만약 기능이 재사용되어야 한다면 컨테이너를 이용해 리덕스와 분리할 것

export default createStore(function(state, action){
    if(state === undefined) {
        return {number: 0}
    }
    if(action.type === 'INCREMENT') {
        return {...state, number: state.number + action.size}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    