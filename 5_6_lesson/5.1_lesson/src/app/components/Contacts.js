import React, {Component} from 'react';

export default class Contacts extends Component {
    render(){
        
        return(
            <div>
                <h1>Контакты</h1>
                <p>email: 1@2.local</p>
                <p>Telephone: +7 (000) 000-00-00</p>
                <p>Вложенность: {this.props.params.number}</p>
            </div>
        )
    }
}