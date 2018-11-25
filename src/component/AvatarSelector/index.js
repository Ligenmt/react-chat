import React, {Component} from 'react';
import {Grid, List} from "antd-mobile";

class AvatarSelector extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const avatarList = ['boy', 'girl', 'man', 'woman'].map(v=>({
            text: v,
            icon: require(`../../image/${v}.png`)
        }))

        const gridHeader = this.state.icon ?
            (<div><span>已选择头像</span><img style={{width: 20}} src={this.state.icon}/></div>) : <div>请选择头像</div>
        return (
            <div>
                {gridHeader}
                <Grid data={avatarList} columnNum={2} onClick={v=>{
                    this.setState(v)
                    this.props.selectAvatar(v.text)
                }} />
            </div>
        );
    }
}

export default AvatarSelector;