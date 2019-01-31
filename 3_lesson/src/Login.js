import React, {Component} from 'react'

export default class Login extends Component {
    render() {
        return (
            <form action="">
                <input id="login" type="text"/>
                <label htmlFor="login">Login</label><br/>
                <input id="password" type="password"/>
                <label htmlFor="password">Password</label><br/>
                <button>Sign In</button>
            </form>
        )
    }

}