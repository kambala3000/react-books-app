import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../css/App.css';
import * as booksActions from '../actions/BooksActions.js';

import BooksList from './BooksList';
import SearchBar from './SearchBar';

class App extends Component {
    render() {
        return (
            <div className="app">
                <SearchBar booksActions={this.props.booksActions} />
                <BooksList books={this.props.books} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return {
        booksActions: bindActionCreators(booksActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
