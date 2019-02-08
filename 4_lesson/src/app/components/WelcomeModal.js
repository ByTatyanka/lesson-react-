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
            width: 400,
            background: '#E6E6FA',
            border: ' 1px solid black',
            position: 'fixed',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        };
        const hStyle = {
            font: '20px bold',
            background: '#E6E6FA',
        };
        if (!this.state.open) {
            return(<></>)
        }

        return(
            <div style={divStyle} >
                <h1 style={hStyle}>Lorem ipsum dolor sit amet. <hr/> </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae culpa dolores ducimus earum, harum hic inventore ipsa minima minus molestiae nemo porro quos sequi soluta tenetur totam veniam voluptatum!</p>
                <button onClick={this.winClose}>Close</button>
            </div>
        )

    }

    componentDidMount(){
        this.setState({open: true})
    }
}