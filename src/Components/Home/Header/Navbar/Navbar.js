import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import ProfilePopper from '../ProfilePopper/ProfilePopper';
import './Navbar.css'
const NavBar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <Navbar expand="lg" className={(isSticky || isCollapsed) ? "slide in py-1 show shadow-sm navbar navbar-expand-sm nav-bg navbar-light   fixed-top" : "slide out show navbar navbar-expand-sm navbar-light py-1 fixed-top "}>
            <Container>
                <Navbar.Brand to='/' > <Image style={{ height: '33px', width: '43px' }} src='https://www.wanderon.in/wanderon-logo.svg' /> </Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="basic-navbar-nav" style={{ background: 'white' }} />
                <Navbar.Collapse id="navbar-nav" className='navbar-content'>
                    <div className='contact-content'>
                        <img src="https://www.wanderon.in/svg/nav/phone.svg" alt="" />
                        <a href="+91-8887756502" alt='telNumber'>+91-8887756502</a>
                    </div>
                    <Nav className="nav-text text-center">
                        <Nav.Link to='/home' className="mr-3"><strong>Home</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link href="#about" className="mr-3"><strong>About</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link href="#service" className="mr-3"><strong>Service</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link href="#contact" className="mr-3"><strong>Contact</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link to='/dashboard/profile' className="mr-3"><strong>Dashboard</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        {/* {
                        isSignedIn ? <ProfilePopper /> : <Button as={Link} to='/login' variant="info" className='main-button'>Login</Button>
                    } */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;