import React, {Component} from 'react';
import Logo from '../../component/Logo';
import {List,InputItem,Button, WhiteSpace, WingBlank} from "antd-mobile";
import {connect} from 'react-redux'
import {login} from "../../redux/user.redux"
import {Redirect} from "react-router-dom";
import form from '../../component/Form'


function wHello(Comp) {
    class WrapComp extends React.Component {
        render() {
            return (
            <div>
                <p>上面</p>
                <Comp {...this.props}/>
                <p>下面</p>
            </div>)
        }
    }
    return WrapComp
}

@wHello
class Hello extends React.Component {
    render() {
        return (<h2>Hello React</h2>)
    }
}
// Hello = wHello(Hello)


@connect(
    state => state.user,
    {login}
)
@form
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
                        <InputItem onChange={v=>this.props.handleChange('user', v)}>用户名</InputItem>
                        <InputItem onChange={v=>this.props.handleChange('pwd', v)}>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick={this.handleLogin} type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        );
    }

    // handleChange(key, value) {
    //     this.setState({[key]: value})
    // }

    register = () => {
        this.props.history.push('/register')
    }

    handleLogin = () => {
        this.props.login(this.props.state)
    }
}
export default Login;
