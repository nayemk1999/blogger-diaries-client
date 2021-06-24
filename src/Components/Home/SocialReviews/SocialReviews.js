import React from 'react';
import './SocialReviews.css'
const SocialReviewsData = [
    {
        img: 'https://www.wanderon.in/svg/google-review.svg',
        rate: '4.9',
        count: '2162'
    },
    {
        img: 'https://www.wanderon.in/svg/tripadvisor-review.svg',
        rate: '5.0',
        count: '536'
    },
    {
        img: 'https://www.wanderon.in/svg/facebook-review.svg',
        rate: '4.9',
        count: '645'
    },
]
const SocialReviews = () => {
    const starIcon = 'https://www.wanderon.in/svg/star.svg'
    return (
        <div className='container '>
            <h5 style={{fontWeight: '400',color: 'rgb(58, 58, 58)'}}>Get ready for 5-star Expierences with us</h5>
            <div className='socialReviews-container'>
                {
                    SocialReviewsData.map(data => 
                        <a href="#" alt=''>
                            <div className='reviewItem'>
                                <img style={{ height: '4.1vw' }} src={data.img} alt="" />
                                <div className='socialRating'>
                                    <img src={starIcon} alt="" />
                                    <div className='rating'>{data.rate}</div> 
                                </div>
                                <div className='rating-count'>({data.count} reviews)</div>
                            </div>
                        </a>
                    )
                }

            </div>
        </div>
    );
};

export default SocialReviews;