import React, {Component} from 'react';
import {NavBar} from 'antd-mobile'
import AvatarSelector from '../../component/AvatarSelector'
import {InputItem,WingBlank, WhiteSpace, Button, TextareaItem} from 'antd-mobile'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from "react-router-dom";

@connect(
    state => state.user,
    {update}
)
class Bossinfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: '',
        }
    }

    render() {
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <div>
                {redirectTo && redirectTo!==path ? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar mode="dark">boss完善信息页</NavBar>
                <AvatarSelector selectAvatar={(image) => {
                    this.setState({
                        avatar:image
                    })
                }} />
                <InputItem onChange={(v)=>{this.handleChange('title', v)}}>招聘职位</InputItem>
                <InputItem onChange={(v)=>{this.handleChange('company', v)}}>公司名称</InputItem>
                <InputItem onChange={(v)=>{this.handleChange('money', v)}}>职位薪资</InputItem>
                <TextareaItem onChange={(v)=>{this.handleChange('desc', v)}} rows={3} autoHeight title="职位要求"/>
                <Button type="primary" onClick={this.handleUpdate}>保存</Button>
            </div>

        );
    }

    handleChange(key, value) {
        this.setState({[key]: value})
    }

    handleUpdate = ()=>{
        this.props.update(this.state)
    }

}

export default Bossinfo;