import React, { Component } from 'react';
import classnames from 'classnames';

import '../../css/ScrollUpButton.css';

class ScrollUpButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    onClickHandler = () => {
        window.scrollTo(0, 0);
    };

    scrollHandler = e => {
        if (window.pageYOffset > 300 && !this.state.show) {
            this.setState({ show: true });
        } else if (window.pageYOffset <= 300 && this.state.show) {
            this.setState({ show: false });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
        return (
            <button
                className={classnames('scroll-up', { 'scroll-up--show': this.state.show })}
                title="Back to top"
                onClick={this.onClickHandler}
            >
                <div className="scroll-up__arrow-block" />
            </button>
        );
    }
}

export default ScrollUpButton;
