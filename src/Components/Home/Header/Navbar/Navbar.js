import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './Navbar.css'

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
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
        <Navbar expand="lg" className={(isSticky || isCollapsed) ? `slide in py-1 show shadow-sm navbar navbar-expand-sm nav-bg navbar-light fixed-top` : `slide out show navbar navbar-expand-sm navbar-light py-1 fixed-top`}>
            <Container>
                <Navbar.Brand to='/' > <Image style={{ height: '33px', width: '43px' }} src='https://www.wanderon.in/wanderon-logo.svg' /> </Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="basic-navbar-nav" style={{ background: 'white' }} />
                <Navbar.Collapse id="navbar-nav">
                    <div className='contact-content'>
                        {/* <img src="https://www.wanderon.in/svg/nav/phone.svg" alt="" /> */}
                        {/* <a href="+91-8887756502" alt='telNumber'>+91-8887756502</a> */}
                    </div>
                    <Nav className="text-center">
                        <Nav.Link as={Link} to='/home' className="mr-3"><strong>Home</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link as={Link} href="#about" className="mr-3"><strong>About</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link as={Link} href="#service" className="mr-3"><strong>Service</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link as={Link} href="#contact" className="mr-3"><strong>Contact</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/dashboard' className="mr-3"><strong>Dashboard</strong>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        
                        <Button as={Link} to='/dashboard/add-blog' variant="info" className='main-button'>Post Blog</Button> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;