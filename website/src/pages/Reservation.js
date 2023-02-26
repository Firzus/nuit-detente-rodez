import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dark from '../header/Dark';
import ColoredLine from '../components/Line';
import { RiUserAddLine } from "react-icons/ri";

// Import Assets
import piscine_jacuzzi_balcon from '../assets/reservation/piscine_jacuzzi_balcon.jpg';

class Reservation extends Component {

    render() {
        return (
            <>
                <div
                    className='sizing-lg-screen'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#848c7c',
                        minHeight: '100vh'
                    }}
                >
                    <Dark />

                    <Container className='flex-grow-1'>

                        <Row className='pb-5 pb-lg-0 pt-1 pt-lg-3  d-flex flex-column justify-content-center align-items-center h-25'>

                            <Col className='pb-3 d-flex align-items-center justify-content-center text-center display-3 w-100 font-link' style={{ height: '40%', color: '#ffffff' }}>
                                Réservation
                            </Col>

                            <Col className='d-flex align-items-center justify-content-center text-center fs-3 w-100 font-link' style={{ height: '60%', color: '#ffffff' }}>
                                Dès à présent, votre séjour pour deux en quelques clics !
                            </Col>

                        </Row>

                        <Row className='d-flex flex-column flex-lg-row pb-3 pt-3 pb-md-5 h-75'>

                            <Col
                                lg={{ span: 6, offset: 0 }}
                                xs={{ span: 10, offset: 1 }}
                                className='pb-5 pb-lg-0 d-flex align-items-center justify-content-center h-100'>

                                <img
                                    src={piscine_jacuzzi_balcon}
                                    className='img-fluid'
                                    alt='Réservation'
                                />

                            </Col>

                            <Col className='pt-2 pb-2 d-lg-none'>
                                <ColoredLine color="white" />
                            </Col >

                            <Col
                                lg={{ span: 6, offset: 0 }}
                                xs={{ span: 10, offset: 1 }}
                                className='d-flex pb-3 pb-md-0 flex-column flex-sm-row align-items-center justify-content-center h-100'>

                                <div className='w-100 w-md-50 h-100 d-flex flex-column justify-content-center align-items-center'>

                                    <div className='p-3 d-flex flex-column align-items-center justify-content-center'>

                                        <div className='fs-2 p-3 text-center font-link' style={{ color: '#ffffff' }}>
                                            Option
                                        </div>

                                        <div className='p-3'>
                                            <RiUserAddLine color='white' size='3em' />
                                        </div>

                                    </div>

                                    <div className='p-3 w-100 d-flex flex-column align-items-center align-items-sm-start'>

                                        <div className='p-1'>
                                            <div className='fs-4 font-link' style={{ color: '#ffffff' }}>
                                                - Massage 2*35m
                                            </div>

                                            <div className='fs-4 font-link' style={{ color: '#ffffff' }}>
                                                - Massage 1*60m
                                            </div>

                                            <div className='fs-4 font-link' style={{ color: '#ffffff' }}>
                                                - Champagne 75cl
                                            </div>

                                            <div className='fs-4 font-link' style={{ color: '#ffffff' }}>
                                                - Champagne 35cl
                                            </div>

                                            <div className='fs-4 font-link' style={{ color: '#ffffff' }}>
                                                - Rosé 25cl
                                            </div>

                                            <div className='fs-4 font-link' style={{ color: '#ffffff' }}>
                                                - Option Romantique
                                            </div>

                                            <div className='fs-4 font-link' style={{ color: '#ffffff' }}>
                                                - Option Anniversaire
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className='w-75 d-sm-none'>
                                    <ColoredLine color='white' />
                                </div>

                                <div className='w-100 w-md-50 h-100 d-flex flex-column justify-content-center align-items-center'>

                                    <div className='pt-2'>
                                        <div className='p-1 fs-3 text-center font-link' style={{ color: '#ffffff' }}>
                                            ~ Tarif été ~
                                        </div>
                                        <div className='p-1 fs-6 text-center font-link' style={{ color: '#ffffff' }}>
                                            200€ la nuitée
                                        </div>
                                        <div className='p-1 fs-6 text-center font-link' style={{ color: '#ffffff' }}>
                                            180€ / nuit les 2 nuits ou plus
                                        </div>
                                    </div>

                                    <div className='pt-2 pb-2'>
                                        <div className='p-1 fs-3 text-center font-link' style={{ color: '#ffffff' }}>
                                            ~ Tarif hiver ~
                                        </div>
                                        <div className='p-1 fs-6 text-center font-link' style={{ color: '#ffffff' }}>
                                            180€ la nuitée
                                        </div>
                                        <div className='p-1 fs-6 text-center font-link' style={{ color: '#ffffff' }}>
                                            160€ / nuit les 2 nuits ou plus
                                        </div>
                                    </div>

                                    <div className='pt-2 pb-4 fs-4 text-center font-link' style={{ color: '#ffffff' }}>
                                        Votre séjour commence ici !
                                    </div>

                                    <a
                                        className="fs-3 text-decoration-none button-light font-link"
                                        href='https://www.airbnb.fr/rooms/45201561?guests=1&adults=1&s=67&unique_share_id=840d9989-eebb-4b01-99c5-b4aef67c0a37'
                                    >
                                        Réserver
                                    </a>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </div >

            </>
        );
    };
}

export default Reservation;