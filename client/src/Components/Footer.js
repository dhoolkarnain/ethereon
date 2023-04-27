import React from 'react';
import './Footer.css';
import { SiEthereum } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="logo">
                <a href="/"><SiEthereum />ETHEREON
                </a>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                <a href="https://www.instagram.com/"><AiFillInstagram /></a>
                <a href="https://www.youtube.com/"><AiFillYoutube /></a>
                <a href="https://www.linkedin.com/"><FaLinkedin /></a>
            </div>
            <div className="footer-text">
                <p>&copy; 2023 Ethereon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
