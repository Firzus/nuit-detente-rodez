import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import Light from '../header/Light';

// Import Assets
import vue_ensemble_piscine_vertical from '../assets/accueil/vue_ensemble_piscine_vertical.jpg';
import vue_ensemble_piscine_horizontal from '../assets/accueil/vue_ensemble_piscine_horizontal.jpg';
import CallButton from '../components/CallButton';

class Accueil extends Component {

    render() {
        return (
            <>
                <div
                    className='sizing-lg-screen'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        backgroundColor: '#f4eeed',
                        minHeight: '100vh'
                    }}
                >
                    <Light />

                    <Container className='d-flex flex-grow-1 flex-column align-items-center justify-content-center'>

                        <Row>

                            <Col
                                xs={{ span: 10, offset: 1 }}
                                lg={{ span: 6, offset: 0 }}
                                className='d-flex flex-column justify-content-around align-items-start'>

                                <div className='d-flex justify-content-center justify-content-center flex-column'>

                                    <div className='pt-3 pb-3 d-flex align-items-center display-2 text-left font-link' style={{ color: '#66694d' }}>
                                        Nuit Détente à Rodez
                                    </div>

                                    <div className='pt-3 pb-3 fs-4 text-left font-link' style={{ color: '#66694d' }}>
                                        Venez passer un agréable moment dans cette suite magnifique suite avec piscine intérieure et jacuzzi.
                                    </div>

                                    <div className='pt-3 pb-3 d-flex align-items-center justify-content-start'>
                                        <NavLink className="fs-3 text-decoration-none button-dark font-link" to="/chambre">
                                            Découvrir
                                        </NavLink>
                                    </div>

                                    <div className='pt-3 d-lg-none d-flex flex-row align-items-center'>

                                        <Link
                                            to="/files/autour-de-rodez.pdf"
                                            target="_blank"
                                            download
                                        >

                                            <FaFileDownload className='p-0 animSocialNetworkLogo' size='4em' color='#848c7c' />

                                        </Link>

                                        <div className='font-link fs-5' style={{ color: '#66694d' }}>
                                            Aux alentours...
                                        </div>

                                    </div>

                                </div>

                                <div className='w-100 d-none d-lg-flex flex-row justify-content-between'>

                                    <div className='d-flex align-items-center mr-auto'>
                                        <a href='https://www.instagram.com/invites/contact/?i=wr5qemhuojjs&utm_content=m1cug3z'>
                                            <AiOutlineInstagram className='animSocialNetworkLogo' size='6em' color='#848c7c' />
                                        </a>
                                        <a href='https://www.facebook.com/100886845952517/posts/pfbid036JkhfZycoyzh1wc1g9ja8jmjo8WRP4mHEmowmrb8fnMWMyWLaUJ18w9yPScESojil/?d=n'>
                                            <RiFacebookLine className='animSocialNetworkLogo' size='6em' color='#848c7c' />
                                        </a>
                                        <CallButton />
                                    </div>

                                    <div className='d-flex flex-row align-items-center'>

                                        <Link
                                            to="/files/autour-de-rodez.pdf"
                                            target="_blank"
                                            download
                                        >

                                            <FaFileDownload className='animSocialNetworkLogo' size='6em' color='#848c7c' />

                                        </Link>

                                        <div className='font-link fs-4' style={{ color: '#66694d' }}>
                                            Aux alentours...
                                        </div>

                                    </div>

                                </div>

                            </Col>

                            <Col
                                xs={{ span: 10, offset: 1 }}
                                lg={{ span: 6, offset: 0 }}
                                className='d-none d-md-block align-items-center justify-content-center'>

                                <div className='position-relative w-100 h-100'  >

                                    <div style={{ position: 'absolute', height: '60% ', width: '60% ', backgroundColor: '#66694d' }} />

                                    <div style={{ position: 'absolute', height: '90%', width: '90%', top: '10%', left: '10%', backgroundColor: '#ffffff' }}>

                                        <img
                                            src={vue_ensemble_piscine_vertical}
                                            className='w-100 h-100 d-xl-none'
                                            alt='Présentation Accueil'
                                        />

                                        <img
                                            src={vue_ensemble_piscine_horizontal}
                                            className='mw-100 h-100 d-none d-xl-block'
                                            alt='Présentation Accueil'
                                        />

                                    </div>

                                </div>

                            </Col>

                        </Row>

                        <Row className='p-5 d-lg-none align-items-center justify-content-center'>

                            <Col>

                                <img
                                    className='mh-100 w-100'
                                    src={vue_ensemble_piscine_horizontal}
                                    alt='Présentation Accueil'
                                />

                            </Col>

                        </Row>

                        <Row className='d-flex d-lg-none w-100'>

                            <div className='d-flex flex-row align-items-center justify-content-around w-100'>
                                <a href='https://www.instagram.com/invites/contact/?i=wr5qemhuojjs&utm_content=m1cug3z'>
                                    <AiOutlineInstagram className='d-inline animSocialNetworkLogo' size='5em' color='#848c7c' />
                                </a>
                                <a href='https://www.facebook.com/100886845952517/posts/pfbid036JkhfZycoyzh1wc1g9ja8jmjo8WRP4mHEmowmrb8fnMWMyWLaUJ18w9yPScESojil/?d=n'>
                                    <RiFacebookLine className='d-inline animSocialNetworkLogo' size='5em' color='#848c7c' />
                                </a>
                                <CallButton />
                            </div>

                        </Row>

                    </Container>

                </div >

            </>
        );
    };
}

export default Accueil;