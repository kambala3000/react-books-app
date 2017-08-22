import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

import '../../css/BooksList.css';

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.renderBooksList = this.renderBooksList.bind(this);
    }

    renderBooksList() {
        const { list, fetching } = this.props.books;
        const booksList = fetching
            ? <p className="books-list__loading">Loading...</p>
            : list.map(item =>
                  <BookItem
                      key={item.id}
                      images={item.volumeInfo.imageLinks}
                      title={item.volumeInfo.title}
                      authors={item.volumeInfo.authors}
                      publishedDate={item.volumeInfo.publishedDate}
                      desctiption={item.volumeInfo.desctiption}
                      pageCount={item.volumeInfo.pageCount}
                      categories={item.volumeInfo.categories}
                      language={item.volumeInfo.language}
                  />
              );
        return booksList;
    }

    render() {
        return (
            <div className="books-list">
                <div className="books-list__wrap">
                    {this.renderBooksList()}
                </div>
            </div>
        );
    }
}

BooksList.propTypes = {
    books: PropTypes.object.isRequired
};

export default BooksList;
