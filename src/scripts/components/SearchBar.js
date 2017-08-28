import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryString: '',
            hasChanged: false
        };
    }

    changeSearchQuery = e => {
        const queryString = e.target.value.toLowerCase().trim();
        this.setState({
            queryString,
            hasChanged: true
        });
    };

    findOnClick = () => {
        if (this.state.hasChanged) {
            this.setState({ hasChanged: false });
            const { fetchBooks } = this.props.booksActions;
            fetchBooks(this.state.queryString);
        }
    };

    findOnKeyDown = e => {
        if (e.keyCode === 13) {
            this.findOnClick();
        }
    };

    render() {
        return (
            <div className="search-bar">
                <input
                    type="search"
                    className="search-bar__input"
                    placeholder="Search..."
                    onChange={this.changeSearchQuery}
                    onKeyDown={this.findOnKeyDown}
                />
                <button className="search-bar__button" onClick={this.findOnClick}>
                    Search
                </button>
            </div>
        );
    }
}

SearchBar.propTypes = {
    booksActions: PropTypes.object.isRequired
};

export default SearchBar;
