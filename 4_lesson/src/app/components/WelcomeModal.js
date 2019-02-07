import React, {Component} from 'react';

export default class WelcomeModal extends Component{
    constructor(){
        super ();
        this.state = {
            open: false
        };

        this.winClose = () => {
            this.setState({open: false})}
    }

    render(){

        const divStyle = {
            height: 100,
            width: 300,
        };
        if (!this.state.open) {
            return(<></>)
        }

        return(
            <div style={divStyle} >
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in incidunt numquam quis sapiente, sequi.</p>
                <button onClick={this.winClose}>Close</button>
            </div>
        )

    }

    componentDidMount(){
        this.setState({open: true})
    }
}