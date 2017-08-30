import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../css/Favorites.css';
import BooksList from './BooksList';

class Favorites extends Component {
    render() {
        return (
            <div className="favorites">
                <div className="favorites__controls">
                    <Link to="/" className="favorites__back">
                        🡐 Back
                    </Link>
                </div>
                <div className="favorites__list">
                    <BooksList books={{ list: this.props.favorites, offset: 0, page: 0 }} />
                </div>
            </div>
        );
    }
}

Favorites.propTypes = {
    favorites: PropTypes.array.isRequired
};

export default Favorites;
