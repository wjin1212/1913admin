import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import RootRoute from './router'
import * as serviceWorker from './serviceWorker';
// 全局引入样式文件
import 'antd/dist/antd.css'
ReactDOM.render(<RootRoute />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
