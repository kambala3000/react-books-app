import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter } from 'react-router-dom';
import '../../css/App.css';
import * as booksActions from '../actions/BooksActions.js';

import MainHeader from './MainHeader';
import BooksList from './BooksList';
import SearchBar from './SearchBar';
import Favorites from './Favorites';

class App extends Component {
    render() {
        return (
            <div className="app">
                <MainHeader favoritesLength={this.props.favorites.length} />

                <Route
                    exact
                    path="/"
                    render={props => (
                        <div className="app__container">
                            <SearchBar booksActions={this.props.booksActions} />
                            <BooksList books={this.props.books} />
                        </div>
                    )}
                />

                <Route
                    path="/favorites"
                    render={props => <Favorites favorites={this.props.favorites} />}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
        favorites: state.favorites
    };
}

function mapDispatchToProps(dispatch) {
    return {
        booksActions: bindActionCreators(booksActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
