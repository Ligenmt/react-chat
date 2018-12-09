import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './style.css'

@withRouter
@connect(
    state=>state.chat
)
class NavLink extends Component {

    // static propTypes = {
    //     data: PropTypes.array.isRequired
    // }

    render() {
        const navList = this.props.data.filter(v=> !v.hide)
        const pathname = this.props.location.pathname
        return (
            <TabBar tabBarPosition="bottom">
                {navList.map(v=>(
                    <TabBar.Item title={v.text}
                                 badge={v.path === '/msg' ? this.props.unread : 0}
                                 key={v.path}
                                 icon={{uri: require(`./img/${v.icon}.png`)}}
                                 selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
                                 selected={pathname === v.path}
                                 onPress={()=>{
                                     this.props.history.push(v.path)
                                 }}
                    ></TabBar.Item>
                    )
                )}
            </TabBar>
        );
    }
}

export default NavLink;
