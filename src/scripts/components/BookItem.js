import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../../css/BookItem.css';
import langCodes from '../share/langCodes';
import defaultImage from '../../img/notebook.png';
import Star from './svg/Star';

class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: false
        };
    }

    readMoreHandler = () => {
        this.setState({ showAll: !this.state.showAll });
    };

    render() {
        const {
            imageLinks,
            title,
            authors,
            publishedDate,
            description,
            pageCount,
            categories,
            language
        } = this.props.itemData.volumeInfo;
        let imageUrl = '';
        if (imageLinks) {
            imageUrl = imageLinks.thumbnail || imageLinks.smallThumbnail;
        } else {
            imageUrl = defaultImage;
        }

        return (
            <div className="book-item">
                <div className="book-item__image-wrap">
                    <a
                        target="_blank"
                        href={`https://www.google.com/search?q=${title}`}
                        className="book-item__image-link"
                    >
                        <img
                            src={imageUrl}
                            alt=""
                            title="Search in Google"
                            className="book-item__image"
                        />
                    </a>
                </div>
                <div className="book-item__wrap">
                    <p className="book-item__info">
                        {categories && (
                            <span className="book-item__info--categories">
                                {categories.join(', ')}
                                {', '}
                            </span>
                        )}
                        {publishedDate && (
                            <span className="book-item__info--year">
                                {publishedDate.slice(0, 4)}
                            </span>
                        )}
                    </p>
                    <h4 className="book-item__title">
                        <a
                            className="book-item__title-link"
                            target="_blank"
                            title="Search in Google"
                            href={`https://www.google.com/search?q=${title}`}
                        >
                            {title}
                        </a>
                    </h4>
                    {authors && <p className="book-item__authors">{authors.join(', ')}</p>}
                    {description && (
                        <p
                            className={classnames(
                                'book-item__description',
                                {
                                    'book-item__description--cutted':
                                        !this.state.showAll && description.length > 350
                                },
                                { 'book-item__description--show-all': this.state.showAll }
                            )}
                            style={{
                                maxHeight:
                                    this.state.showAll && description.length / 80 * 18 + 20 + 'px'
                            }}
                        >
                            {description}
                        </p>
                    )}
                    <div className="book-item__bottom-line-wrap">
                        <p className="book-item__additional-info">
                            {langCodes[language]}
                            {pageCount && `, ${pageCount} pages`}
                        </p>
                        {description &&
                        description.length > 350 && (
                            <span className="book-item__show-more" onClick={this.readMoreHandler}>
                                {this.state.showAll ? 'Hide 🡡' : 'Read more...'}
                            </span>
                        )}
                    </div>
                    <div className="book-item__star-wrap">
                        <Star item={this.props.itemData} />
                    </div>
                </div>
            </div>
        );
    }
}

BookItem.propTypes = {
    itemData: PropTypes.object.isRequired
};

export default BookItem;
