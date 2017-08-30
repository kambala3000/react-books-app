import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../css/MainHeader.css';

const MainHeader = props => {
    return (
        <div className="main-header">
            <h1 className="main-header__app-title">
                <Link to="/" className="main-header__app-title-link">
                    Books finder
                </Link>
            </h1>
            <Link to="/favorites" className="main-header__favorites-link">
                Favorites{' '}
                <span className="main-header__favorites-link--counter">
                    {props.favoritesLength}
                </span>
            </Link>
        </div>
    );
};

MainHeader.propTypes = {
    favoritesLength: PropTypes.number.isRequired
};

export default MainHeader;
