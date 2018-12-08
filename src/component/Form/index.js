import React, {Component} from 'react';


export default function form(Comp) {
    return class WrapperComp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {}
            //在react中点击事件里面 setState 时会使this重新定义，所以在点击的函数里面使用this.setState()时会报错this.setState not a function，
            // 因此需要提前给点击事件的函数绑定this
            this.handleChange = this.handleChange.bind(this)
        }

        handleChange(key, val) {
            console.log(key, val)
            this.setState({[key]: val})
        }
        render() {
            return <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
        }
    }
}
