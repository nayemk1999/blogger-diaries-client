import React from 'react';
import './HighLight.css'
const HighLight = (props) => {
    const {title, img, rate} = props.highLight
    return (
        <div className='rating-container col-md-4 mb-4'>
            <img src={img} alt="" />
            <div className='rating-content'>
                {rate}
                <br/>
                {title}
            </div>
        </div>
    );
};

export default HighLight;