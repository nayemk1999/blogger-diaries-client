import React from 'react';
import './Carousels.css'

const CarouselsContent = (props) => {
    const { biking, camping, bikingText, campingText, trekking, trekkingText, paragliding, paraglidingText, snowParadise, snowParadiseText, img, locationIcon, locationText, price, text, timeIcon, timeText } = props.propsData;

    const content = {
        width: "21vw",
        height: "17vw",
        backgroundImage: `linear-gradient(to top, rgb(58, 58, 58) 0%, rgba(58, 58, 58, 0.5) 15%, rgba(58, 58, 58, 0) 25%, rgba(58, 58, 58, 0) 100%), url(${img})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "1vw",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
    }
    return (
        <div className='slide-container'>
            <div className='slide-content'>
                <div style={content}>      
                </div>
            </div>
            <div >
                <div className='slide-bottom-content'>
                    <div className='slide-info'>
                        <div className='slide-time'>
                            <img src={timeIcon} alt="" />
                            {timeText}
                        </div>
                        <div className='slide-location'>
                            <img src={locationIcon} alt="" />
                            {locationText}
                        </div>
                    </div>
                    <div className='slide-word'>
                        {text}
                    </div>
                    <div className='slide-value'>
                        <span style={{ fontSize: "1vw", fontWeight: "400" }}>Starts at</span>
                        <div>
                            {price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselsContent;