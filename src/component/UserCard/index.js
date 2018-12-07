import React, {Component} from 'react';
import {Card, WhiteSpace, WingBlank} from "antd-mobile";

class UserCard extends Component {



    render() {
        return (
            <div>
                <WingBlank>
                    <WhiteSpace></WhiteSpace>
                    {this.props.userlist.map(v=>(
                        <Card key={v._id}>
                            <Card.Header
                                title={v.user}
                                thumb={require(`../../image/${v.avatar}.png`)}
                                extra={v.title}
                            >
                            </Card.Header>
                            <Card.Body>
                                {v.type === 'boss' ? <div>公司:{v.company}</div> : null}
                                {v.desc ? v.desc.split('\n').map(d=>(
                                    <div key={d}>{d}</div>
                                )) : null}
                                {v.type === 'boss' ? <div>薪资:{v.money}</div> : null}
                            </Card.Body>
                        </Card>
                    ))}
                </WingBlank>
            </div>
        );
    }
}

export default UserCard;
