import React, {Component} from 'react';
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import axios from 'axios'
import {Card, WhiteSpace, WingBlank} from "antd-mobile";

@connect(
    state => state.user,
    {update}
)
class Boss extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('/user/list?type=genius').then(res=>{
            if (res.data.code == 0) {
                this.setState({data: res.data.data})
            }
        })

    }

    render() {
        return (
            <div>
                <WingBlank>
                    <WhiteSpace></WhiteSpace>
                    {this.state.data.map(v=>(
                        <Card key={v._id}>
                            <Card.Header
                                title={v.user}
                                thumb={require(`../../image/${v.avatar}.png`)}
                                extra={v.title}
                            >
                            </Card.Header>
                            <Card.Body>
                                {v.desc ? v.desc.split('\n').map(v=>(
                                    <div key={v}>{v}</div>
                                )) : null}
                            </Card.Body>
                        </Card>
                    ))}
                </WingBlank>
            </div>
        );
    }
}

export default Boss;
