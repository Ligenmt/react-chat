import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';

import reducers from './reducer'
import './config'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Login from  './container/Login'
import Register from './container/Register'
import Bossinfo from './container/Bossinfo'
import GeniusInfo from './container/GeniusInfo'
import AuthRoute from "./component/AuthRoute"
import Dashboard from "./component/Dashboard"
import Chat from './component/Chat'
import Test from './container/Test'

//google 调试用扩展
//初始化reducer状态
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))

//Provider在最外层传入store
//Switch是只要命中一个就直接渲染，下面的不管
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute/>
                <Switch>
                    <Route path='/login' component={Login} ></Route>
                    <Route path='/register' component={Register} ></Route>
                    <Route path='/bossinfo' component={Bossinfo} ></Route>
                    <Route path='/geniusinfo' component={GeniusInfo} ></Route>
                    <Route path='/chat/:user' component={Chat} ></Route>
                    <Route path='/test' component={Test} ></Route>
                    <Route component={Dashboard} ></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
