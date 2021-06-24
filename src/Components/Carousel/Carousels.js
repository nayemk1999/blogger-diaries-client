import React from 'react';
import Slider from 'react-slick';
import CarouselsContent from './CarouselsContent';
import './Carousels.css'
import { trendingData } from '../SlideData/SlideData';

const Carousels = () => {
    const settings = {
        className: "text-center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1
    };
    return (
        <div className='mt-3'>
            <h1 className='mb-3 mt-4'>Top Latest Blogs List</h1>
            <Slider {...settings}>
                    {
                        trendingData.map(propsData => <CarouselsContent propsData={propsData} />)
                    }

            </Slider>
        </div>
    );
};

export default Carousels;