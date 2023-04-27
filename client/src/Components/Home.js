import React from 'react';
import './Home.css';

// date fns

import formatDistanceToNow from "date-fns/formatDistanceToNow"

const FrontPage = ( { blog } ) =>
{
    return (
        <div className="front-page">
            <div className="main-post">
                <div className="main-post__image">
                    <img src={blog.image} alt='pic' />
                </div>
                <div className="main-post__content">
                    <h2 className="main-post__title">{blog.title}</h2>

                    <p className="main-post__date">{formatDistanceToNow( new Date( blog.createdAt ), { addSuffix: true } )}</p>
                    <p className="main-post__body">
                        {blog.body}
                    </p>

                </div>
            </div>
            <div className="featured-posts">
                <h3 className="featured-posts__title">Featured Posts</h3>
                <ul className="featured-posts__list">
                    <li className="featured-posts__item">
                        <a href="/" className="featured-posts__link">
                            <h4 className="featured-posts__item-title">
                                What is an ADA-Compliant Website? The Complete Guide</h4>
                            <p className="featured-posts__item-date">June 1, 2023</p>
                        </a>
                    </li>
                    <li className="featured-posts__item">
                        <a href="/" className="featured-posts__link">
                            <h4 className="featured-posts__item-title">
                                How to Create a Sales Plan: Template + Examples</h4>
                            <p className="featured-posts__item-date">June 2, 2023</p>
                        </a>
                    </li>
                    <li className="featured-posts__item">
                        <a href="/" className="featured-posts__link">
                            <h4 className="featured-posts__item-title">
                                5 Steps to Create an Outstanding Marketing Plan [Free Templates]</h4>
                            <p className="featured-posts__item-date">June 3, 2023</p>
                        </a>
                    </li>
                    <li className="featured-posts__item">
                        <a href="/" className="featured-posts__link">
                            <h4 className="featured-posts__item-title">
                                How to Create an Effective Customer Journey Map [Examples + Template]</h4>
                            <p className="featured-posts__item-date">June 4, 2023</p>
                        </a>
                    </li>
                    <li className="featured-posts__item">
                        <a href="/" className="featured-posts__link">
                            <h4 className="featured-posts__item-title">
                                How to Start Coding: The Ultimate Guide for Beginner Programmers</h4>
                            <p className="featured-posts__item-date">June 5, 2023</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FrontPage;
