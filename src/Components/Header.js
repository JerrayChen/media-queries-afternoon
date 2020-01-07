import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            menuStatus: "menu-status"
        }
    }

    handleMenu() {
        if (this.state.menuStatus === "menu-status-open") {
            this.setState({
                menuStatus: "menu-status-close"
            });
        } else {
            this.setState({
                menuStatus: "menu-status-open"
            });
        }
    }

    render() {
        return (
            <header>
                <ul className={this.state.menuStatus}>
                    <li className='menu-list-mobile'>SERVICES</li>
                    <li className='menu-list-mobile'>PORTFOLIO</li>
                    <li className='menu-list-mobile'>ABOUT</li>
                    <li className='menu-list-mobile'>TEAM</li>
                    <li className='menu-list-mobile'>CONTACT</li>
                </ul>
                <nav>
                    <div className='logo'>
                        Start Bootstrap
                    </div>
                    <ul className='desk-list'>
                        <li className='menu-list-desktop'>SERVICES</li>
                        <li className='menu-list-desktop'>PORTFOLIO</li>
                        <li className='menu-list-desktop'>ABOUT</li>
                        <li className='menu-list-desktop'>TEAM</li>
                        <li className='menu-list-desktop'>CONTACT</li>
                    </ul>
                    <button className='menu-btn' onClick={() => { this.handleMenu() }}>Menu☰</button>
                </nav>

                <main>
                    <div className='welcome'>Welcome To Our Studio!</div>
                    <div className='greeting'>IT'S NICE TO MEET YOU</div>
                    <button className='more-info'>TELL ME MORE</button>
                </main>

            </header>
        )
    }
}
export default Header;