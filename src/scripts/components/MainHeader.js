import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/MainHeader.css';

class MainHeader extends Component {
    render() {
        return (
            <div className="main-header">
                <h1 className="main-header__app-title">Books finder</h1>
                <div className="main-header__favorites-link">
                    Favorites{' '}
                    <span className="main-header__favorites-link--counter">
                        {this.props.favoritesLength}
                    </span>
                </div>
            </div>
        );
    }
}

MainHeader.propTypes = {
    favoritesLength: PropTypes.number.isRequired
};

export default MainHeader;
