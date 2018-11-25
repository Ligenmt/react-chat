import React, {Component} from 'react'
import Axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadData} from '../../redux/user.redux'

@withRouter //AuthRoute没有<Route>，没有props.history
@connect(
    null,
    {loadData},
)
class AuthRoute extends Component {

    componentDidMount() {
        const publicPath = ['/login', '/register']
        //获取当前路由
        const pathname = this.props.location.pathname
        if (publicPath.indexOf(pathname) > -1) {
            return null
        }
        //获取用户信息
        Axios.get('/user/info').then((res) => {
            if (res.data.code == 0) {
                //已登录
                this.props.loadData(res.data.data)
            } else {
                //未登录
                this.props.history.push('/login')
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