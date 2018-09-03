import React , { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    handleSubmit() {
        console.log('submitted', this.state.email);
    }

    handleEmailChange() {
        console.log('mail change', this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <input
                   type='text'
                   placeholder='E-mail'
                   value={this.state.email}
                   onChange={this.handleEmailChange}
               />
            </form>
        );
    }
}

export default RegistrationForm;
