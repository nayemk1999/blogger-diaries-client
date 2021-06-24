import React from 'react';
import './Footer.css'
const linkedIn = 'https://www.wanderon.in/svg/footer/linkedin.svg';
const facebook = 'https://www.wanderon.in/svg/footer/facebook.svg';
const instagram = 'https://www.wanderon.in/svg/footer/instagram.svg';
const youtube = 'https://www.wanderon.in/svg/footer/youtube.svg';
const pinterest = 'https://www.wanderon.in/svg/footer/pinterest.svg';

const Footer = () => {
    return (
        <div className='social-container'>
            <div className='social-content'>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={facebook} alt="" />
                </a>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={instagram} alt="" />
                </a>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={pinterest} alt="" />
                </a>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={linkedIn} alt="" />
                </a>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={youtube} alt="" />
                </a>
            </div>
            <div className='contact-container'>
                <div className='contact-content'>address</div>
                <div className='contact-content'>WANDERON TRAVEL COMMUNITY</div>
                <div className='contact-content'>17/S2 Instaoffice, Tum Road, Pocket S, Okhla Phase -II</div>
            </div>
            <div className='contact-tech'>
                <a href="mailto:hello@gmail.com/" alt=''>
                    hello@wanderon.in
                </a>
                <a href="tel:+91-8887756502" alt=''>
                    +91-8887756502
                </a>
                <a href="https://www.wanderon.in" alt=''>
                    www.wanderon.in
                </a>
            </div>
        </div>
    );
};

export default Footer;