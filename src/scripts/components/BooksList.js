import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import '../../css/BooksList.css';
import BookItem from './BookItem';

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.perPage = 10;
        // this.state = {
        //     offset: 0
        // };
    }

    handlePageClick = e => {
        console.log(e);
        const { setOffset } = this.props.booksActions;
        // this.setState({
        //     offset: e.selected * this.perPage
        // });
        setOffset(e.selected * this.perPage, e.selected);
    };

    render() {
        const { list, fetching, offset, page } = this.props.books;
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
                            if (index >= offset && startCount < this.perPage) {
                                startCount++;
                                return <BookItem key={item.id} itemData={item} />;
                            }
                        })
                    ) : (
                        <p className="books-list__not-found">Sorry, nothing found.</p>
                    )}
                    {list &&
                    list.length > 0 && (
                        <ReactPaginate
                            previousLabel={'«'}
                            nextLabel={'»'}
                            forcePage={page}
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
                    )}
                </div>
            </div>
        );
    }
}

BooksList.propTypes = {
    books: PropTypes.object.isRequired,
    booksActions: PropTypes.object.isRequired
};

export default BooksList;
