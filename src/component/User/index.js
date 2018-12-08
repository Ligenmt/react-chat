import React, {Component} from 'react';
import {connect} from 'react-redux'
import {logout} from '../../redux/user.redux'
import {Result, List, WhiteSpace, Modal} from 'antd-mobile'
import browserCookies from 'browser-cookies'
import {Redirect} from "react-router-dom";

@connect(
    state => state.user,
    {logout}
)
class User extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const props = this.props
        return this.props.user ? (
            <div>
                <Result
                    img={<img src={require(`../../image/${props.avatar}.png`)}  style={{width:50}} />}
                    title={props.user}
                    message={props.type === 'boss' ? props.company : null}
                >
                </Result>
                <List renderHeader={()=>'简介'}>
                    <List.Item multipleLine>{props.title}
                        {props.desc ? props.desc.split('\n').map(d=>(
                            <List.Item.Brief key={d}>{d}</List.Item.Brief>
                        )) : null}
                        {props.money ? <List.Item.Brief>薪资:{props.money}</List.Item.Brief> : null}
                    </List.Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <List.Item onClick={this.logout}>退出登录</List.Item>
                </List>
            </div>
        ) : <Redirect to={this.props.redirectTo}/>;
    }

    logout = () => {

        const alert = Modal.alert
        alert('注销', '确认退出吗?', [
            {text: '取消', onPress: () => {}},
            {text: '确认', onPress: () => {
                browserCookies.erase('userId')
                this.props.logout()
            }},
        ])

    }


}

export default User;
