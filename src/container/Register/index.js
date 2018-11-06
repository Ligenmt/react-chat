import React, {Component} from 'react'
import Logo from '../../component/Logo'
import {List,InputItem,WingBlank,Radio,WhiteSpace,Button} from 'antd-mobile'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: 'genius' // or boss
        }
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h2>注册页面</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        <RadioItem checked={this.state.type == 'genius'}>牛人</RadioItem>
                        <RadioItem checked={this.state.type == 'boss'}>老板</RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        );
    }

    register = () => {
        console.log('register')
    }
}

export default Register;