import React, {Component} from 'react';
import Axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRoute extends Component {

    componentDidMount() {
        //获取用户信息
        Axios.get('/user/info').then((res) => {
            if (res.data.code == 0) {

            } else {
                //没有登录信息
                console.log(this.props.history)
            }
        })
        //是否登录

        //用户的type
    }

    render() {
        return null;
    }
}

export default AuthRoute;