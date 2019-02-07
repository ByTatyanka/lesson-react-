import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Blog from './app/components/blog';
import WelcomeModal from './app/components/WelcomeModal'

class App extends Component {
    render() {
        let posts = [
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid dignissimos dolorum iure minus.'
            },
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid dignissimos dolorum iure minus.'
            },
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid dignissimos dolorum iure minus.'
            },
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid dignissimos dolorum iure minus.'
            },
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid dignissimos dolorum iure minus.'
            }
        ];

        return (
            <div>
                <Blog posts = {posts}/>
                <WelcomeModal/>
            </div>
        )
    }
}


ReactDom.render(<App/>, document.getElementById('root'));