import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CarouselsContent from './CarouselsContent';
import './Carousels.css'

const Carousels = () => {
    const [blogs, setBlogs] = useState([])
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
    useEffect(() => {
        const url = 'http://localhost:3003/allBlogs'
        fetch(url)
        .then(res => res.json())
        .then(data => setBlogs(data))


    }, [])
    return (
        <div className='mt-3'>
            <h1 className='mb-3 mt-4'>Top Latest Blogs</h1>
            <Slider {...settings}>
                    {
                        blogs.map(propsData => <CarouselsContent propsData={propsData} />)
                    }

            </Slider>
        </div>
    );
};

export default Carousels;