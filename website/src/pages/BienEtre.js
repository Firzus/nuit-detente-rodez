import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import Light from '../header/Light';

// Import Assets
import ensemble_piscine from '../assets/bien_etre/ensemble_piscine.jpg';
import jacuzzi from '../assets/bien_etre/jacuzzi.jpg';
import vue_ensemble_stretching from '../assets/bien_etre/vue_ensemble_stretching.jpg';

class BienEtre extends Component {

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

                    <Container className='flex-grow-1 d-flex flex-column align-items-center'>

                        <div className='d-flex flex-column justify-content-around align-items-center w-100' style={{ height: '30%' }}>

                            <div className="display-3 pt-2 text-center font-link" style={{ color: "#516349" }}>
                                Espace bien-être
                            </div>

                            <div
                                className='fs-4 text-center font-link'
                                style={{
                                    width: '75%',
                                    padding: '2',
                                    textAlign: 'center',
                                    color: '#66694d'
                                }}
                            >
                                Jacuzzi, espace stretching et piscine privée à votre disposition quand vous le souhaitez.
                            </div>

                        </div>

                        <div className='w-100 pb-5 pt-3 align-items-center d-none d-md-flex justify-content-center' style={{ height: '70%' }}>

                            <Col
                                className='h-100'
                                xl={6}
                                lg={10}
                                md={12}
                            >
                                <div className='position-relative w-100 h-100'>

                                    <div style={{ position: 'absolute', height: '30% ', width: '40% ', backgroundColor: '#848c7c' }} />

                                    <div style={{ position: 'absolute', height: '80%', width: '40%', top: '10%', left: '10%', backgroundColor: '#ffffff' }}>

                                        <img
                                            alt='Présentation du Service Bien-être'
                                            src={vue_ensemble_stretching}
                                            className='h-100 w-100'
                                        />

                                    </div>

                                    <div style={{ position: 'absolute', height: '60%', width: '60%', top: '20%', left: '40%', backgroundColor: '#ffffff' }}>
                                        <img
                                            alt='Présentation du Service Bien-être'
                                            src={ensemble_piscine}
                                            className='h-100 w-100'
                                        />
                                    </div>

                                </div>

                            </Col>

                            <Col
                                className='h-50 d-none d-xl-flex flex-column justify-content-between align-items-center'
                                xl={3}
                            >
                                <div style={{ width: '50%', height: '20%', backgroundColor: '#516349' }} />
                                <div style={{ width: '50%', height: '20%', backgroundColor: '#848c7c' }} />
                                <div style={{ width: '50%', height: '20%', backgroundColor: '#ffffff' }} />

                            </Col>

                            <Col
                                className='d-none d-xl-flex'
                                xl={3}
                            >
                                <img
                                    className='img-fluid'
                                    src={jacuzzi}
                                    alt='Présentation du Service Bien-être'
                                />

                            </Col>

                        </div>

                        <div className='w-100 pb-3 d-lg-none d-flex flex-column align-items-center justify-content-center' style={{ height: '70%' }}>

                            <div className='h-25 w-100 p-3 d-flex flex-column justify-content-between align-items-center'>

                                <div style={{ width: '25%', height: '20%', backgroundColor: '#516349' }} />
                                <div style={{ width: '25%', height: '20%', backgroundColor: '#848c7c' }} />
                                <div style={{ width: '25%', height: '20%', backgroundColor: '#ffffff' }} />

                            </div>

                            <div className='h-75 w-75 d-flex align-items-center justify-content-center'>

                                <img
                                    className='img-fluid'
                                    src={ensemble_piscine}
                                    alt='Présentation du Service Bien-être'
                                />

                            </div>

                        </div>

                    </Container>

                </div >
            </>
        );
    };
}

export default BienEtre;