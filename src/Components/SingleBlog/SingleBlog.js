import React from 'react';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/Header/Navbar/Navbar';
import SocialReviews from '../Home/SocialReviews/SocialReviews';

const SingleBlog = () => {
    const SingleBlogStyle = {
        height: '80vh',
        width: '100vw',
        marginTop: '-7vh',
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://www.wanderon.in/triplist/main-cover.jpg')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
    return (
        <div>
            <div style={SingleBlogStyle} className='single-blog-container'>
                <NavBar />
                <div>
                    <h1 className='text-white head-title mb-5'>Bangladesh's Coolest Blogger Dairies</h1>
                    <h1 className='text-white head-title mb-5'>Bangladesh's Coolest Blogger Dairies</h1>
                </div>
            </div>
            <div>
                <h1 className='text-dark'>Description</h1>
            </div>
            <SocialReviews/>
            <Footer/>
        </div>

    );
};

export default SingleBlog;