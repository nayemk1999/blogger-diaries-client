import React from 'react';
import Carousels from '../../Carousel/Carousels';
import { trendingData } from '../../SlideData/SlideData';
import Header from '../Header/Header';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';

// import { Widget } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <Carousels trendingData={trendingData} />
            </Container>
            {/* <Widget
                subtitle="Please Enter Your Phone Number"
            /> */}
        </div>
    );
};

export default Home;