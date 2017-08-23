import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import classnames from 'classnames';

class Star extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            starred: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.mouseHandler = this.mouseHandler.bind(this);
    }

    onClickHandler() {
        this.setState({
            starred: !this.state.starred
        });
    }

    mouseHandler() {
        if (!this.state.starred) {
            this.setState({
                show: !this.state.show
            });
        }
    }

    render() {
        return (
            <SVGInline
                className={classnames('book-item__star-icon', {
                    'book-item__star-icon--hover-effects': this.state.starred
                })}
                onClick={this.onClickHandler}
                onMouseEnter={this.mouseHandler}
                onMouseLeave={this.mouseHandler}
                svg={
                    this.state.show
                        ? `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94; width="24px" height="24px" xml:space="preserve">
                            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                                c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                                c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                                c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                                c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                                C22.602,0.567,25.338,0.567,26.285,2.486z" />
                        </svg>`
                        : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490.727 490.727" style="enable-background:new 0 0 490.727 490.727;" xml:space="preserve" width="24px" height="24px">
                            <path d="M453.443,160.214l-119.7-8.6c-2.5-0.2-4.7-1.7-5.6-4.1l-45.6-111c-6.3-15.3-20.5-24.8-37.1-24.8s-30.7,9.5-37.1,24.9   l-45.7,111.1c-1,2.3-3.1,3.9-5.6,4.1l-119.5,8.6c-16.2,0.9-30,11.5-35.3,27.1c-5.4,15.8-0.9,32.4,11.9,43.3l92.5,76.4   c1.9,1.6,2.8,4.2,2.2,6.6l-28.2,115.4c-3.3,12-1,24.4,6.3,34.1c7.5,9.8,19.2,15.7,31.5,15.7c7.6,0,15-2.3,21.1-6.4l101.1-62.9   c2.1-1.3,4.8-1.3,6.9,0l102.1,62.7c6.4,4.3,13.8,6.6,21.3,6.6c11.5,0,22.9-5.5,30.3-14.8c7.7-9.6,10.5-22.1,7.7-34.6l-28.3-115.7   c-0.6-2.5,0.3-5.1,2.2-6.7l93.9-76.6c12.6-10.8,17.1-27.4,11.8-43.2C483.343,171.814,469.443,161.114,453.443,160.214z    M461.143,211.714l-93.7,76.5c-9.2,7.5-13.4,19.9-10.5,31.5l28.3,115.5c1.5,6.8-1.2,11.5-3,13.7c-2.8,3.5-7,5.7-11.2,5.7   c-2.6,0-5.2-0.8-8-2.7l-102.5-63c-4.9-3-10.5-4.6-16.3-4.6s-11.5,1.6-16.4,4.7l-101.5,63.1c-6.5,4.3-15.2,2.4-19.8-3.6   c-1.9-2.5-3.9-6.8-2.1-13.1l28.3-115.8c2.8-11.5-1.3-23.8-10.4-31.3l-92.3-76.3c-7.3-6.3-5.3-14.4-4.5-16.7s4.1-10,13.7-10.5   l119.7-8.6c11.8-0.9,22-8.2,26.5-19.2l45.7-111.1c3.7-9,12-9.7,14.4-9.7c2.4,0,10.7,0.7,14.4,9.7l45.7,111.1   c4.5,11,14.7,18.3,26.5,19.2l119.9,8.7c9.4,0.5,12.7,8.2,13.5,10.5C466.143,197.514,468.143,205.614,461.143,211.714z" />
                        </svg>`
                }
            />
        );
    }
}

export default Star;
