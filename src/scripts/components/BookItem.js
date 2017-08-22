import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/BookItem.css';

class BookItem extends Component {
    render() {
        const {
            title,
            authors,
            publishedDate,
            desctiption,
            pageCount,
            categories,
            language
        } = this.props;
        return (
            <div className="book-item">
                <h4 className="book-item__title">
                    {title}
                </h4>
                {authors
                    ? <p className="book-item__authors">
                          {authors}
                      </p>
                    : false}
                {categories
                    ? <p className="books-item__categories">
                          {categories}
                      </p>
                    : false}
                <p className="book-item__info">
                    {publishedDate
                        ? <span className="book-item__info-item book-item__info-item--date">
                              {publishedDate}
                          </span>
                        : false}
                    {pageCount
                        ? <span className="book-item__info-item book-item__info-item--pages">
                              {pageCount}
                          </span>
                        : false}
                    {language
                        ? <span className="book-item__info-item book-item__info-item--lang">
                              {language}
                          </span>
                        : false}
                </p>
            </div>
        );
    }
}

BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    publishedDate: PropTypes.string,
    desctiption: PropTypes.string,
    pageCount: PropTypes.number,
    categories: PropTypes.array,
    language: PropTypes.string
};

export default BookItem;
