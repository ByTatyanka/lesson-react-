import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ManuItem extends Component {
    render(){
        return(
            <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
                <Link className='nav-link' to={this.props.href}>
                    {this.props.children}
                </Link>
            </li>
        )
    }
}