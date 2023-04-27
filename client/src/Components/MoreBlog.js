import React from 'react';
import './MoreBlog.css';

const Section = () =>
{
    return (
        <section className="section">
            <h3 className='moreblog__title'>More Blogs</h3>
            <div className="container">
                <div className="post">
                    <div className="post__image">
                        <img src="https://blog.hubspot.com/hs-fs/hubfs/southwest%20customer%20service_featured.jpg?width=903&height=450&name=southwest%20customer%20service_featured.jpg" alt="Post 1" />
                    </div>
                    <div className="post__content">
                        <h3 className="post__title">What Southwest’s Travel Disruption Taught Us About Customer ...</h3>
                        <p className="post__body">We can learn a few things about customer service based on Southwest's recent travel disruption. Read...

                        </p>
                        <p className="post__date">Date Posted: 01/01/2023</p>
                    </div>
                </div>
                <div className="post">
                    <div className="post__image">
                        <img src="https://blog.hubspot.com/hs-fs/hubfs/linkedin-summary-examples-4.jpg?width=903&height=450&name=linkedin-summary-examples-4.jpg" alt="Post 2" />
                    </div>
                    <div className="post__content">
                        <h3 className="post__title">
                            17 Best LinkedIn Summary & Bio Examples [+ How to Write Your...</h3>
                        <p className="post__body">Looking for help on writing a LinkedIn summary? These examples will give you the inspiration you nee...

                        </p>
                        <p className="post__date">Date Posted: 01/02/2023</p>
                    </div>
                </div>
                <div className="post">
                    <div className="post__image">
                        <img src="https://blog.hubspot.com/hs-fs/hubfs/events-and-conferences-for-black-entrepreneurs.png?width=903&height=450&name=events-and-conferences-for-black-entrepreneurs.png" alt="Post 3" />
                    </div>
                    <div className="post__content">
                        <h3 className="post__title">17 Events and Conferences for Black Entrepreneurs in 2023</h3>
                        <p className="post__body">Discover in-person and virtual events nationwide where Black entrepreneurs can strengthen relationsh...

                        </p>
                        <p className="post__date">Date Posted: 01/03/2023</p>
                    </div>
                </div>
                <div className="post">
                    <div className="post__image">
                        <img src="https://blog.hubspot.com/hs-fs/hubfs/Team-Collaboration-1.jpg?width=903&height=450&name=Team-Collaboration-1.jpg" alt="Post 4" />
                    </div>
                    <div className="post__content">
                        <h3 className="post__title">
                            12 Crucial Strategies for Promoting Team Collaboration — Plu...</h3>
                        <p className="post__body">
                            Use these strategies for promoting more productive team collaboration. Plus, hear common collaborati...

                        </p>
                        <p className="post__date">Date Posted: 01/04/2023</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
