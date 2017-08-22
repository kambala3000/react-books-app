import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryString: ''
        };
        this.changeSearchQuery = this.changeSearchQuery.bind(this);
        this.findOnClick = this.findOnClick.bind(this);
        this.findOnKeyDown = this.findOnKeyDown.bind(this);
    }

    changeSearchQuery(e) {
        const queryString = e.target.value.toLowerCase().trim();
        this.setState({
            queryString
        });
    }

    findOnClick() {
        const { fetchBooks } = this.props.booksActions;
        fetchBooks(this.state.queryString);
    }

    findOnKeyDown(e) {
        if (e.keyCode === 13) {
            this.findOnClick();
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    type="search"
                    className="search-bar__search"
                    placeholder="Search..."
                    onChange={this.changeSearchQuery}
                    onKeyDown={this.findOnKeyDown}
                />
                <button className="search-bar__search" onClick={this.findOnClick}>
                    Get
                </button>
            </div>
        );
    }
}

SearchBar.propTypes = {
    booksActions: PropTypes.object.isRequired
};

export default SearchBar;
