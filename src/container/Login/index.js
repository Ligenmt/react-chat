import React, {Component} from 'react';
import Logo from '../../component/Logo';
import {List,InputItem,Button, WhiteSpace, WingBlank} from "antd-mobile";
import {connect} from 'react-redux'
import {login} from "../../redux/user.redux"
import {Redirect} from "react-router-dom";

@connect(
    state => state.user,
    {login}
)
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
        }
    }

    render() {
        return (
            <div>
                {(this.props.redirectTo && this.props.redirectTo !== '/login') ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <h2>登录页面</h2>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p>{this.props.msg}</p> : null}
                        <InputItem onChange={v=>this.handleChange('user', v)}>用户名</InputItem>
                        <InputItem onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick={this.handleLogin} type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        );
    }

    handleChange(key, value) {
        this.setState({[key]: value})
    }

    register = () => {
        this.props.history.push('/register')
    }

    handleLogin = () => {
        this.props.login(this.state)
    }
}
export default Login;
