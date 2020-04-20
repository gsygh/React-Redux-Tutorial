import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';

// index.js에 Provider import 후 provider로 감싸기
// Provider로 store를 공급해주어 모든 하위 컴포넌트들은 store에 접근 가능
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
