import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import '../../css/BooksList.css';
import BookItem from './BookItem';

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.perPage = 10;
        this.state = {
            currentPage: 1,
            offset: 0
        };
    }

    handlePageClick = e => {
        this.setState({
            currentPage: e.selected,
            offset: e.selected * this.perPage
        });
    };

    render() {
        const { list, fetching } = this.props.books;
        const pagesCount = list ? Math.ceil(list.length / this.perPage) : 0;
        let startCount = 0;
        return (
            <div className="books-list">
                <div className="books-list__wrap">
                    {fetching ? (
                        <p className="books-list__loading">Loading...</p>
                    ) : list ? (
                        // eslint-disable-next-line
                        list.map((item, index) => {
                            if (index >= this.state.offset && startCount < this.perPage) {
                                startCount++;
                                return <BookItem key={item.id} itemData={item} />;
                            }
                        })
                    ) : (
                        <p className="books-list__not-found">Sorry, nothing found.</p>
                    )}
                    <ReactPaginate
                        previousLabel={'«'}
                        nextLabel={'»'}
                        breakLabel={<a href="">...</a>}
                        breakClassName={'pagination__break'}
                        pageCount={pagesCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        pageClassName={'pagination__item'}
                        pageLinkClassName={'pagination__link'}
                        previousClassName={'pagination__item'}
                        nextClassName={'pagination__item'}
                        previousLinkClassName={'pagination__link'}
                        nextLinkClassName={'pagination__link'}
                        activeClassName={'pagination__item--active'}
                        disabledClassName={'pagination__item--disabled'}
                    />
                </div>
            </div>
        );
    }
}

BooksList.propTypes = {
    books: PropTypes.object.isRequired
};

export default BooksList;
