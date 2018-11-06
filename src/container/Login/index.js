import React, {Component} from 'react';
import Logo from '../../component/Logo';
import {List,InputItem,Button, WhiteSpace, WingBlank} from "antd-mobile";

class Login extends Component {

    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>登录页面</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        );
    }

    register = () => {
        this.props.history.push('/register')
    }
}
export default Login;