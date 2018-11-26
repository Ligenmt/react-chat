import React, {Component} from 'react';
import {Route} from "react-router-dom";
import { TabBar } from 'antd-mobile';



class Dashboard extends Component {

    render() {
        const navList = [
            {
                path: '',
                text: '',
                icon: '',
                title: '',

            }
        ]
        return (
            <div>
                <h2>header</h2>
                    {/*<Route path='/boss' component={Boss} ></Route>*/}
                    {/*<Route path='/genius' component={Genius} ></Route>*/}
                <h2>footer</h2>
            </div>
        );
    }
}

export default Dashboard;