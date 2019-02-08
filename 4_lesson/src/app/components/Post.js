import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Post extends Component {
    render(){
        let {title, postBody} = this.props.item;
        return(
            <div>
                <h1>{title}</h1>
                <p>{postBody}</p>
                <hr/>
            </div>
        )
    }
}

Post.propTypes = {
        item: PropTypes.object.isRequired,
};