import React , { Component } from 'react';
import Dropdown from './Dropdown';
import Header from './Header';
import RegistrationForm from './RegistrationForm';

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];

class App extends Component {
    render() {
        return (
            <div>
                <Header items={menu}/>
                <Dropdown />
                <RegistrationForm />
            </div>
        );
    }
}

export default App;
