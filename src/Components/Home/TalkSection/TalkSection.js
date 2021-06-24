import React from 'react';
import './TalkSection.css'
const TalkSection = () => {
    return (
        <div className='talk-section'>
            <h1 className='text-dark'>This.....................</h1>
            <div className='talk-section-content'>
                <div className='talk-content'>
                Handover all your requirements to our travel experts who've curated more than 200 itineraries.
                </div>
                <a href="#" alt="" className='talkBtn'>Talk to our expert</a>
                <div className='talk-bottom'>P.S.- We love talking about travel 24*7</div>
                <img src="https://www.wanderon.in/svg/home/cta-image.svg" alt="" />
            </div>
        </div>
    );
};

export default TalkSection;