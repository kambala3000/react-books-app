import React from 'react';
import PropTypes from 'prop-types';

import '../../css/BooksList.css';
import BookItem from './BookItem';

const BooksList = props => {
    const { list, fetching } = props.books;
    return (
        <div className="books-list">
            <div className="books-list__wrap">
                {fetching ? (
                    <p className="books-list__loading">Loading...</p>
                ) : list ? (
                    list.map(item => <BookItem key={item.id} itemData={item} />)
                ) : (
                    <p className="books-list__not-found">Sorry, nothing found.</p>
                )}
            </div>
        </div>
    );
};

BooksList.propTypes = {
    books: PropTypes.object.isRequired
};

export default BooksList;
