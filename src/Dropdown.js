import React , { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
    }

    toggleState() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render() {
        console.log('opened', this.state.isOpened);
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div>Here's a drop-down</div>
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                It's a drop-down
                {dropdownText}
            </div>
        );
    }
}

export default Dropdown;
