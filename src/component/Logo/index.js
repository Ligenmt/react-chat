import React, {Component} from 'react';
import logoImage from './job.png';
import './style.css';

class Logo extends Component {
    render() {
        return (
            <div className="logo__container">
                <img src={logoImage}></img>
            </div>
        );
    }
}

export default Logo;