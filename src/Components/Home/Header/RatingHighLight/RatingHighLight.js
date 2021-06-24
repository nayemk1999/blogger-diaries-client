import React from 'react';
import HighLight from './HighLight';
const highLightData = [
    {
        img: 'https://www.wanderon.in/svg/cover-travellers.svg',
        rate: '50000+',
        title: 'Happy Travellers'
    },
    {
        img: 'https://www.wanderon.in/svg/cover-star.svg',
        rate: '2000+',
        title: '5 Star Ratings'
    },
    {
        img: 'https://www.wanderon.in/svg/cover-destination.svg',
        rate: '300+',
        title: 'Itineraries'
    },
]


const RatingHighLight = () => {
    console.log(highLightData);
    return (
        <div className='row gx-5 mt-5'>
            {
                highLightData.map(highLight => <HighLight highLight={highLight}></HighLight>)
            }
        </div>
    );
};

export default RatingHighLight;