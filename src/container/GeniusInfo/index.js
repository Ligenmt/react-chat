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
class Geniusinfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
        }
    }

    render() {
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <div>
                {redirectTo && redirectTo!==path ? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar mode="dark">牛人完善信息页</NavBar>
                <AvatarSelector selectAvatar={(image) => {
                    this.setState({
                        avatar:image
                    })
                }} />
                <InputItem onChange={(v)=>{this.handleChange('title', v)}}>求职岗位</InputItem>
                <TextareaItem onChange={(v)=>{this.handleChange('desc', v)}} rows={3} autoHeight title="个人简介"/>
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

export default Geniusinfo;