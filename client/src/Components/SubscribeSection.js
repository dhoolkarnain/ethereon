import React from 'react';
import './SubscribeSection.css';

const SubscribeSection = () =>
{
    return (
        <div className="subscribe-section">
            <h2 className="subscribe-heading">Subscribe to our newsletter</h2>
            <p className="subscribe-text">Get the latest news and updates straight to your inbox.</p>
            <form className="subscribe-form">
                <label htmlFor="email" className="subscribe-label">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email address" className="subscribe-input" />
                <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
        </div>
    );
};

export default SubscribeSection;
