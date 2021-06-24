import React from 'react';
import Slider from 'react-slick';
import CarouselsContent from './CarouselsContent';
const Carousels = (props) => {
    const propsDatas = props.trendingData
    const settings = {
        className: "text-center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 1
    };
    return (
        <div className=' mt-3'>
            <Slider {...settings}>
                {
                    propsDatas.map(propsData => <CarouselsContent propsData={propsData}/>)
                }
            </Slider>
        </div>
    );
};

export default Carousels;