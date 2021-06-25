import React from 'react';
import { Link } from 'react-router-dom';
import './Carousels.css'

const CarouselsContent = (props) => {
    const { title, postDate, imgURL, _id, author } = props.propsData;
    const timeIcon = 'https://www.wanderon.in/svg/clock.svg';
    const locationIcon = 'https://www.wanderon.in/svg/map-pin.svg';
    const content = {
        width: "21vw",
        height: "17vw",
        backgroundImage: `linear-gradient(to top, rgb(58, 58, 58) 0%, rgba(58, 58, 58, 0.5) 15%, rgba(58, 58, 58, 0) 25%, rgba(58, 58, 58, 0) 100%), url(${imgURL})`,
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
            <Link to='/single-blog/'>
                <div className='slide-content'>
                    <div style={content}>
                    </div>
                </div>
                <div >
                    <div className='slide-bottom-content'>
                        <div className='slide-info'>
                            <div className='slide-time'>
                                <img src={timeIcon} alt="" />
                                {(new Date(postDate).toDateString('dd/MM/yyyy'))}
                            </div>
                            <div className='slide-author'>
                                <img src={locationIcon} alt="" />
                                Dhaka
                            </div>
                        </div>
                        <div className='slide-word'>
                            {title}
                        </div>
                        <div className='slide-value'>
                            <span style={{ fontSize: "1vw", fontWeight: "400" }}>Posted By</span>
                            <div>
                                {author}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CarouselsContent;