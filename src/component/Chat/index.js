import React, {Component} from 'react';
import {List, InputItem, NavBar, Icon} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList, sendMsg, recvMsg} from '../../redux/chat.redux'


@connect(
    state=>state,
    {getMsgList, sendMsg, recvMsg}
)
class Chat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            msg: []
        }
    }

    componentDidMount(){
        if (!this.props.chat.chatmsg.length) {
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }

    render() {
        const userid = this.props.match.params.user
        const users = this.props.chat.users
        if(!users[userid]){
            return null
        }
        return (
            <div id="chat-page">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    onLeftClick={()=>this.props.history.goBack()}
                >{userid}</NavBar>
                {
                    this.props.chat.chatmsg.map(v=>{
                        const avatar = require(`../../image/${users[v.from].avatar}.png`)
                        return v.from == userid ?
                            (<List key={v._id}>
                                    <List.Item thumb={avatar}>对方发的：{v.content}</List.Item>
                            </List>)
                            :
                            (<List key={v._id}>
                                <List.Item className="chat-me" extra={<img src={avatar}/>}>我发的：{v.content}</List.Item>
                            </List>)
                    })
                }
                <div className="stick-footer">
                    {/*显示url中参数*/}
                    {/*<h2>chat with user:{this.props.match.params.user}</h2>*/}
                    <List>
                        <InputItem
                            placeholder="输入"
                            value={this.state.text}
                            onChange={v=>{this.setState({text: v})}}
                            extra={<span onClick={this.handleSubmit}>发送</span>}
                        >

                        </InputItem>
                    </List>
                </div>
            </div>

        );
    }

    handleSubmit = () => {
        const from = this.props.user._id
        const to = this.props.match.params.user
        this.props.sendMsg(from, to, this.state.text)
        this.setState({text: ''})
    }
}

export default Chat;
