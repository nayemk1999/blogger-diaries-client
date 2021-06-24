import React from 'react';
import Carousels from '../../Carousel/Carousels';
import Header from '../Header/Header';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import TalkSection from '../TalkSection/TalkSection';

// import { Widget } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';

const Home = () => {
    return (
        <div>
            <Header />
            
            <Container>
                <Carousels />
            </Container>
            <TalkSection/>
            <Footer/>
            {/* <Widget
                subtitle="Please Enter Your Phone Number"
            /> */}
        </div>
    );
};

export default Home;