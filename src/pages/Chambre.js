import React, { Component } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Dark from '../header/Dark';
import ColoredLine from '../components/Line';

// Import Assets Icon
import cadeau from '../assets/chambre/icone/cadeau.png';
import musique from '../assets/chambre/icone/musique.png';
import nageur from '../assets/chambre/icone/nageur.png';
import point_of_interest from '../assets/chambre/icone/point_of_interest.png';
import sport from '../assets/chambre/icone/sport.png';

// Import Assets Carousel

import cascade from '../assets/chambre/carousel/cascade.jpg';
import espace_stretching from '../assets/chambre/carousel/espace_stretching.jpg';
import lit from '../assets/chambre/carousel/lit.jpg';
import massage from '../assets/chambre/carousel/massage.jpg';
import sejour_affaire_free_wifi from '../assets/chambre/carousel/sejour_affaire_free_wifi.jpg';
import piscine from '../assets/chambre/carousel/piscine.jpg';

class Chambre extends Component {

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

                    <Container className='flex-grow-1 d-flex justify-content-center'>

                        <Row className='w-100 h-100 d-flex justify-content-center align-items-center'>

                            <Col
                                style={{ height: '90%' }}
                                xxl={{ span: 4, order: 1 }}
                                xl={{ span: 5, order: 1 }}
                                lg={{ span: 6, order: 1 }}
                                md={{ span: 10, order: 2 }}
                                className="d-none d-md-flex pb-5 align-items-center justify-content-center"
                            >

                                <div className='d-flex align-items-center justify-content-center' style={{ height: '100%', width: '80%' }}>

                                    <Carousel fade indicators={false} >

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={piscine}
                                                className='d-block w-100 h-100'
                                                alt="Piscine"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={lit}
                                                className='d-block w-100 h-100'
                                                alt="Grand lit king-size"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={cascade}
                                                className='d-block w-100 h-100'
                                                alt="Cascade d'eau"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={espace_stretching}
                                                className='d-block w-100 h-100'
                                                alt="Espace sport stretching"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={massage}
                                                className='d-block w-100 h-100'
                                                alt="Service de massage"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={sejour_affaire_free_wifi}
                                                className='d-block w-100 h-100'
                                                alt="Burreau de travail"
                                            />
                                        </Carousel.Item>

                                    </Carousel>

                                </div>

                            </Col>

                            <Col
                                xs={{ span: 10, order: 2 }}
                                className="pb-5 w-100 h-100 d-flex d-md-none align-items-center justify-content-center">

                                <div className='d-flex align-items-center justify-content-center' style={{ height: '100%', width: '80%' }}>

                                    <Carousel fade indicators={false} >

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={piscine}
                                                className='d-block w-100 h-100'
                                                alt="Piscine"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={lit}
                                                className='d-block w-100 h-100'
                                                alt="Grand lit king-size"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={cascade}
                                                className='d-block w-100 h-100'
                                                alt="Cascade d'eau"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={espace_stretching}
                                                className='d-block w-100 h-100'
                                                alt="Espace sport stretching"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={massage}
                                                className='d-block w-100 h-100'
                                                alt="Service de massage"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                style={{ borderRadius: '300px 300px 0 0' }}
                                                src={sejour_affaire_free_wifi}
                                                className='d-block w-100 h-100'
                                                alt="Burreau de travail"
                                            />
                                        </Carousel.Item>

                                    </Carousel>

                                </div>

                            </Col>

                            <Col
                                xxl={{ span: 6, order: 2, offset: 1 }}
                                xl={{ span: 6, order: 2, offset: 1 }}
                                lg={{ span: 6, order: 2 }}
                                md={{ span: 12, order: 1 }}
                                className='h-100 d-flex flex-column align-items-center justify-content-center'
                            >

                                <div className='pt-sm-3 pb-sm-3 pt-5 pb-5 display-2 d-flex align-items-center justify-content-center font-link' style={{ color: "#ffffff" }}>
                                    Votre Suite
                                </div>

                                <div className='d-flex flex-column justify-content-center'>

                                    <div className='d-flex flex-column flex-sm-row align-items-center justify-content-start'>

                                        <img
                                            style={{ width: '4em' }}
                                            className='img-fluid p-3'
                                            src={point_of_interest}
                                            alt='Point de vue Rodez, Aveyron'
                                        />
                                        <div className='text-center text-sm-start fs-3 font-link' style={{ color: "#ffffff" }}>
                                            Terrasse plein sud vue sur cathédrale
                                        </div>

                                    </div>

                                    <div className='d-flex flex-column flex-sm-row align-items-center justify-content-start'>

                                        <img
                                            style={{ width: '4em' }}
                                            className='img-fluid p-3'
                                            src={cadeau}
                                            alt='Cadeau offert'
                                        />
                                        <div className='text-center text-sm-start fs-3 font-link' style={{ color: "#ffffff" }}>
                                            Corbeille premier petit déjeuner offert
                                        </div>

                                    </div>

                                    <div className='d-flex flex-column flex-sm-row align-items-center justify-content-start'>

                                        <img
                                            style={{ width: '4em' }}
                                            className='img-fluid p-3'
                                            src={nageur}
                                            alt='Espace de natation'
                                        />
                                        <div className='text-center text-sm-start fs-3 font-link' style={{ color: "#ffffff" }}>
                                            Piscine et jacuzzi
                                        </div>

                                    </div>

                                    <div className='d-flex flex-column flex-sm-row align-items-center justify-content-start'>

                                        <img
                                            style={{ width: '4em' }}
                                            className='img-fluid p-3'
                                            src={sport}
                                            alt='Sport'
                                        />
                                        <div className='text-center text-sm-start fs-3 font-link' style={{ color: "#ffffff" }}>
                                            Espace stretching
                                        </div>

                                    </div>

                                    <div className='d-flex flex-column flex-sm-row align-items-center justify-content-start'>

                                        <img
                                            style={{ width: '4em' }}
                                            className='img-fluid p-3'
                                            src={musique}
                                            alt='Musique'
                                        />
                                        <div className='text-center text-sm-start fs-3 font-link' style={{ color: "#ffffff" }}>
                                            Enceinte bluetooth
                                        </div>

                                    </div>

                                    <div className='d-lg-none'>
                                        <ColoredLine color="white" />
                                    </div >

                                </div>

                                <div className='pt-5 pb-5 display-2 d-flex d-lg-none align-items-center justify-content-center font-link' style={{ color: "#ffffff" }}>
                                    En images...
                                </div>

                            </Col>

                        </Row>

                    </Container>

                </div>
            </>
        );
    };
}

export default Chambre;