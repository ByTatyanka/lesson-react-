import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Blog from './app/components/blog';
import WelcomeModal from './app/components/WelcomeModal'

class App extends Component {
    render() {
        let posts = [
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque, cupiditate esse id laboriosam molestias perferendis placeat soluta velit, veniam voluptates voluptatum! Commodi, consectetur consequatur eius iusto molestiae natus nostrum, numquam, officiis perspiciatis placeat quo similique sint soluta totam velit!'
            },
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque, cupiditate esse id laboriosam molestias perferendis placeat soluta velit, veniam voluptates voluptatum! Commodi, consectetur consequatur eius iusto molestiae natus nostrum, numquam, officiis perspiciatis placeat quo similique sint soluta totam velit!'
            },
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque, cupiditate esse id laboriosam molestias perferendis placeat soluta velit, veniam voluptates voluptatum! Commodi, consectetur consequatur eius iusto molestiae natus nostrum, numquam, officiis perspiciatis placeat quo similique sint soluta totam velit!'
            },
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque, cupiditate esse id laboriosam molestias perferendis placeat soluta velit, veniam voluptates voluptatum! Commodi, consectetur consequatur eius iusto molestiae natus nostrum, numquam, officiis perspiciatis placeat quo similique sint soluta totam velit!'
            },
            {
                title: 'Lorem ipsum dolor sit amet.',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque, cupiditate esse id laboriosam molestias perferendis placeat soluta velit, veniam voluptates voluptatum! Commodi, consectetur consequatur eius iusto molestiae natus nostrum, numquam, officiis perspiciatis placeat quo similique sint soluta totam velit!'
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