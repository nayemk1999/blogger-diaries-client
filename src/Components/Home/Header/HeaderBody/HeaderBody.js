import React from 'react';
import './HeaderBody.css'
import Typical from 'react-typical'
const HeaderBody = () => {
    return (
        <div className='header-body'>
            <h1 className='text-white head-title'>Bangladesh's Coolest Blogger Dairies</h1>
            <h4 className='text-white mb-5 mt-2 typical-content'> 
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
            <div className='search-container '>
                <input type="input" name="" id="" placeholder='What do you Search?' className="input-field" />
                <img src="https://www.wanderon.in/svg/search.svg" alt="" className='search-icon' />
            </div>
        </div>
    );
};

export default HeaderBody;