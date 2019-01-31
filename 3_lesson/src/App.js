import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu'
import Login from './Login'

class App extends Component {
    render() {
        let menu = [{href: '/', title: 'Главная'},
            {href: '/catalog', title: 'Каталог'},
            {href: '/info', title: 'О нас'},
            {href: '/contacts', title: 'Контакты'}];
        return (
            <div>
                <Menu itemMenu={menu}/>
                <div>
                    <Login/>
                </div>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
