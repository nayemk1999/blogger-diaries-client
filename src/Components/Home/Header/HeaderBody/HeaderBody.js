import React from 'react';
import './HeaderBody.css'
import Typical from 'react-typical'
import RatingHighLight from '../RatingHighLight/RatingHighLight';
const HeaderBody = () => {
    return (
        <div>
            <h1 className='text-white'>India's Coolest Travel Community</h1>
            <h4 className='text-white mb-5 mt-2'> 
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Spreading Happiness',
                        1000,
                        'Connecting People',
                        1000,
                        'Creating Memories',
                        1000,
                        'Creating Stories',
                        1000,
                        'Fulfilling Adventure',
                        1000,
                    ]}
                />
            </h4>
            <div className='search-container m-auto'>
                <input type="input" name="" id="" placeholder='Where do you wanna go?' className="input-field" />
                <img src="https://www.wanderon.in/svg/search.svg" alt="" className='search-icon' />
            </div>
            <RatingHighLight/>
        </div>
    );
};

export default HeaderBody;