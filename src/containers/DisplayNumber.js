import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    } // 객체를 반환
}
// redux의 state를 react의 props로 매핑
// redux에서 store의 값이 변경될 때마다 함수가 호출
// 호출될 때 redux의 state 값을 인자로 받음
// 전달하고자 하는 값을 넣으면 됨
// 해당 state는 redux store의 state임
// State 선언, store.subscribe(), 컴포넌트에 number 전달 역할을 모두 함


export default connect(mapReduxStateToReactProps)(DisplayNumber);
// connect()를 실행한 return 값을 함수로 실행하여 만들어진 값을 export
// 그 값은 아래의 컴포넌트의 역할을 함


// 같은 일을 하는 코드를 작성
// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
//     state = {
//         number: store.getState().number
//     }
//     constructor(props) {
//         super(props);
//         store.subscribe(function(){
//             this.setState({
//                 number: store.getState().number
//             });
//         }.bind(this))
//     }
//     render() {
//         return (
//             <DisplayNumber number={this.state.number}/>
//         );
//     }
// }
