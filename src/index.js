import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import App from './component/App';
// import * as serviceWorker from './serviceWorker';

import reducers from './reducer'
import './config'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Login from  './container/Login'
import Register from './container/Register'
import AuthRoute from "./component/AuthRoute";

//google 调试用扩展
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension : ()=>{}
//初始化reducer状态
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))
// console.log(store.getState())
const Test = () => {
    return <h2>Test页面</h2>
}
//Provider在最外层传入store
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute/>
                <Route path='/login' component={Login} ></Route>
                <Route path='/register' component={Register} ></Route>
                <Route path='/test' component={Test} ></Route>
            </div>
        </BrowserRouter>
    </Provider>), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
