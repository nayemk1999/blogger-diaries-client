import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/Header/Navbar/Navbar';
import SocialReviews from '../Home/SocialReviews/SocialReviews';

const SingleBlog = () => {
    const id = useParams()
    const [blog, setBlog]=useState({})

    const SingleBlogStyle = {
        height: '80vh',
        width: '100vw',
        marginTop: '-7vh',
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(${blog.imgURL})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

    useEffect(() => {
        const url = `http://localhost:3003/single-blog/${id.id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [id])

    return (
        <div>
            <div style={SingleBlogStyle} className='single-blog-container'>
                <NavBar />
                <div>
                    <h1 className='text-white head-title mb-5'>Blog Sub Title........</h1>
                    <h1 className='text-white head-title mb-5'>{blog.title}</h1>
                </div>
            </div>
            <div className='container'>
                <h1 className='text-dark p-2'>Description:</h1>
                <p className='mt-2 p-2'>{blog.blogContent}</p>
            </div>
            <SocialReviews/>
            <Footer/>
        </div>

    );
};

export default SingleBlog;