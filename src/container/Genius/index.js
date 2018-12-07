import React, {Component} from 'react';
import {NavBar} from 'antd-mobile'
import {InputItem,WingBlank, WhiteSpace, Button, TextareaItem} from 'antd-mobile'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from "react-router-dom";

@connect(
    state => state.user,
    {update}
)
class Genius extends Component {

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
        return (
            <div>
                Genius
            </div>
        );
    }
}

export default Genius;
