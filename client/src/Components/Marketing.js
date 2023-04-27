import React from 'react';
import './Marketing.css';


const MarketingSection = () =>
{
    return (
        <div className="marketing-section">
            <div className='top-section'>
                <h3 className="marketing-heading">Marketing</h3>
                {/* <div className='marketing__line'></div> */}
                <p className="see-more-link">
                    <a href="/">See more articles</a>
                </p>
            </div>
            <div className='bottom-section'>
                <div className="left-section">
                    <div className="blog-post">
                        <div className='blog-post__image'>
                            <img src="https://blog.hubspot.com/hs-fs/hubfs/AI%20types.png?noresize&width=100&height=134&name=AI%20types.png" alt="Blog post" className="post-image" />
                        </div>
                        <div className="post-info">
                            <h3 className="post-title">4 Types of Arificial Intelligence & What Marketers Are Using Most (Research)</h3>
                            <p className="post-date">4/21/23</p>
                        </div>
                    </div>
                    <div className="blog-post">
                        <div className='blog-post__image'>
                            <img src="https://blog.hubspot.com/hs-fs/hubfs/GettyImages-1170357944.jpg?noresize&width=100&height=134&name=GettyImages-1170357944.jpg" alt="Blog post" className="post-image" />
                        </div>
                        <div className="post-info">
                            <h3 className="post-title">
                                The 12 Best Social Media Analytics Tools for Marketers in 2023</h3>
                            <p className="post-date">4/21/23</p>
                        </div>
                    </div>
                    <div className="blog-post">
                        <div className='blog-post__image'>
                            <img src="https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/content%20aggregator_122022-4.jpeg?noresize&width=100&height=134&name=content%20aggregator_122022-4.jpeg" alt="Blog post" className="post-image" />
                        </div>
                        <div className="post-info">
                            <h3 className="post-title">
                                The Content Aggregator Guide for 2023</h3>
                            <p className="post-date">4/21/23</p>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="ad-box">
                        <p>Advertisement</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingSection;
