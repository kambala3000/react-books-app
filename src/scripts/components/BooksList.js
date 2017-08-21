import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/BooksList.css';

class BooksList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list, fetching } = this.props.books;
        const booksList = fetching
            ? 'Loading...'
            : list.map(item => {
                  return (
                      <li key={item.id}>
                          {item.volumeInfo.title}
                      </li>
                  );
              });
        return (
            <div className="books-list">
                <ul>
                    {booksList}
                </ul>
            </div>
        );
    }
}

BooksList.propTypes = {
    books: PropTypes.object.isRequired
};

export default BooksList;
