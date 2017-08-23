import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/BookItem.css';
import defaultImage from '../../img/notebook.png';
import Star from './svg/Star';

class BookItem extends Component {
    render() {
        const {
            images,
            title,
            authors,
            publishedDate,
            desctiption,
            pageCount,
            categories,
            language
        } = this.props;
        let imageUrl = '';
        if (images) {
            imageUrl = images.thumbnail || images.smallThumbnail;
        } else {
            imageUrl = defaultImage;
        }
        return (
            <div className="book-item">
                <div className="book-item__image-wrap">
                    <img src={imageUrl} alt="" className="book-item__image" />
                </div>
                <div className="book-item__wrap">
                    <p className="book-item__info">
                        {categories &&
                            <span className="book-item__info--categories">
                                {categories.join(', ')}
                                {', '}
                            </span>}
                        {publishedDate &&
                            <span className="book-item__info--year">
                                {publishedDate.slice(0, 4)}
                            </span>}
                    </p>
                    <h4 className="book-item__title">
                        {title}
                    </h4>
                    {authors &&
                        <p className="book-item__authors">
                            {authors.join(', ')}
                        </p>}
                    <div className="book-item__star-wrap">
                        <Star />
                    </div>
                </div>
            </div>
        );
    }
}

BookItem.propTypes = {
    images: PropTypes.object,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    publishedDate: PropTypes.string,
    desctiption: PropTypes.string,
    pageCount: PropTypes.number,
    categories: PropTypes.array,
    language: PropTypes.string
};

export default BookItem;
