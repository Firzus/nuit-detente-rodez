import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Light from '../header/Light';

class NotFound extends Component {
    render() {
        return (
            <>
                <div className='d-flex flex-column vh-100 overflow-hidden' style={{ backgroundColor: '#f4eeed' }}>

                    <Light />

                    <Container className='flex-grow-1'>

                        <Col className='h-100 d-flex flex-column justify-content-around align-items-center'>

                            <Row className='p-3 display-3 font-link' style={{ color: "#66694d" }}>
                                Page Not Found
                            </Row>

                            <Row className='p-3'>

                                <NavLink className="fs-3 text-decoration-none button-dark font-link" to="/">
                                    Accueil
                                </NavLink>

                            </Row>

                            <Row className='p-3'>

                                <div className='align-items-center d-flex flex-row justify-content-between'>
                                    <a href='https://www.instagram.com/invites/contact/?i=wr5qemhuojjs&utm_content=m1cug3z'><FaInstagramSquare className='animSocialNetworkLogo' size='6em' color='#848c7c' /></a>
                                    <a href='https://www.facebook.com/100886845952517/posts/pfbid036JkhfZycoyzh1wc1g9ja8jmjo8WRP4mHEmowmrb8fnMWMyWLaUJ18w9yPScESojil/?d=n'><FaFacebook className='animSocialNetworkLogo' size='6em' color='#848c7c' /></a>
                                </div>

                            </Row>

                        </Col>

                    </Container>

                </div>
            </>
        );
    };
}

export default NotFound;