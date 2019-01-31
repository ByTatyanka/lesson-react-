import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class Menu extends Component {
    render() {
        let {itemMenu} = this.props;

        let MenuItem = itemMenu.map((item, index) => {
                return <li key={index}><a href={item.href}>{item.title}</a></li>
            }
        );
        return (
            <ul>
                {MenuItem}
            </ul>
        )
    }
}

Menu.defaultProps = {
    itemMenu: [{href: "/", title: "Главная"}]
};

Menu.propTypes = {
    itemMenu: PropTypes.array.isRequired,
};