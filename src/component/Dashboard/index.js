import React, {Component} from 'react'
import { NavBar } from 'antd-mobile'
import NavLink from '../NavLink'
import Boss from '../Boss'
import Genius from '../Genius'
import User from '../User'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import {getMsgList, sendMsg, recvMsg} from '../../redux/chat.redux'


function Msg() {
    return <h2>消息列表</h2>
}

@connect(
    state => state,
    {getMsgList, sendMsg, recvMsg}
)
class Dashboard extends Component {

    componentDidMount() {
        if (!this.props.chat.chatmsg.length) {
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }

    render() {
        const pathname = this.props.location.pathname
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type=='genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type=='boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg,
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User,
            }
        ]
        return (
            <div>
                <NavBar className='fixd-header' mode='dard'>{navList.find(v=>v.path===pathname) ? navList.find(v=>v.path===pathname).title : null}</NavBar>
                <div style={{marginTop: 45}}>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLink className='fixd-bottom' data={navList}/>
            </div>
        );
    }
}

export default Dashboard;
