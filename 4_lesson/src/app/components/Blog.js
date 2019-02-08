import React, {Component} from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

export default class Blog extends Component{
    constructor(){
        super();
    }
    render(){
        let post =  this.props.posts.map((val, index) => {
            return <Post item = {val}/>
        });

        return(
            <div>
                {post}
            </div>
        )
    }
}

Blog.propTypes = {
        posts: PropTypes.array.isRequired,
};