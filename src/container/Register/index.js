import React, {Component} from 'react'
import Logo from '../../component/Logo'
import {List,InputItem,WingBlank,Radio,WhiteSpace,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from "../../redux/user.redux"

//state action
const mapState2Props = (state) => state.user
const actionCreators = { register }

@connect(mapState2Props, actionCreators)
class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: 'genius', // or boss
            user: '',
            pwd: '',
        }
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <h2>注册页面</h2>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p>{this.props.msg}</p> : null}
                        <InputItem onChange={v=>this.handleChange('user', v)}>用户名</InputItem>
                        <InputItem type="password" onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        <RadioItem
                            checked={this.state.type === 'genius'}
                            onChange={()=>this.handleChange('type', 'genius')}>
                            牛人
                        </RadioItem>
                        <RadioItem
                            onChange={()=>this.handleChange('type', 'boss')}
                            checked={this.state.type === 'boss'}>老板</RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        );
    }

    handleChange(key, value) {
        this.setState({[key]: value})
    }

    handleRegister = () => {
        this.props.register(this.state)
        console.log('register')
    }
}
// Register = connect()(Register)
export default Register;