import React, { useState } from 'react';
import './Header.css';
import { SiEthereum } from 'react-icons/si';



const Header = () =>
{
    const [ isMobileNavOpen, setIsMobileNavOpen ] = useState( false );

    const handleToggleMobileNav = () =>
    {
        setIsMobileNavOpen( !isMobileNavOpen );
    };
    return (
        <header className="header">
            <div className="logo">
                <a href="/"><SiEthereum />ETHEREON
                </a>
            </div>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="/news">News</a>
                    </li>
                    <li className="nav__item">
                        <a href="/blogs">Blogs</a>
                    </li>
                    <li className="nav__item">
                        <a href="/about">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleToggleMobileNav}>
                    &#9776;
                </div>
                {isMobileNavOpen && (
                    <ul className="nav__list--mobile">
                        <li className="nav__item--mobile">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav__item--mobile">
                            <a href="/news">News</a>
                        </li>
                        <li className="nav__item--mobile">
                            <a href="/blogs">Blogs</a>
                        </li>
                        <li className="nav__item--mobile">
                            <a href="/about">About</a>
                        </li>
                        <li className="nav__item--mobile">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
