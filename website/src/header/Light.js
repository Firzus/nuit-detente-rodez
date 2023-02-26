import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <>
                <Navbar expand="lg" className='d-none d-lg-block'>
                    <Container>
                        <Nav className="w-100 d-flex justify-content-between">
                            <NavLink className='fs-3 menu-light text-center d-flex align-items-center justify-content-center font-link' to="/">Accueil</NavLink >
                            <NavLink className='fs-3 menu-light text-center d-flex align-items-center justify-content-center font-link' to="/chambre">Chambre</NavLink >
                            <Navbar.Brand className='d-flex align-items-center justify-content-center' as={NavLink} to="/">
                                <img
                                    src={process.env.PUBLIC_URL + '/img/logo/nuit-detente-icone-light.png'}
                                    width="150"
                                    height="150"
                                    className="d-inline-block align-top"
                                    alt="Icone Nuit Détente Rodez"
                                />
                            </Navbar.Brand>
                            <NavLink className='fs-3 menu-light text-center d-flex align-items-center justify-content-center font-link' to="/bien-etre">Bien-être</NavLink >
                            <NavLink className='fs-3 menu-light text-center d-flex align-items-center justify-content-center font-link' to="/reservation">Réservation</NavLink >
                        </Nav>
                    </Container>
                </Navbar>

                <Navbar expand="lg" className='d-lg-none'>
                    <Container>
                        <Navbar.Brand className='d-flex align-items-center justify-content-center' as={NavLink} to="/">
                            <img
                                src={process.env.PUBLIC_URL + '/img/logo/nuit-detente-icone-light.png'}
                                width="150"
                                height="150"
                                className="d-inline-block align-top"
                                alt="Icone Nuit Détente Rodez"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="w-100 d-flex justify-content-between">
                                <NavLink className='p-2 fs-3 menu-light text-center d-flex align-items-center justify-content-center font-link' to="/">Accueil</NavLink >
                                <NavLink className='p-2 fs-3 menu-light text-center d-flex align-items-center justify-content-center font-link' to="/chambre">Chambre</NavLink >
                                <NavLink className='p-2 fs-3 menu-light text-center d-flex align-items-center justify-content-center font-link' to="/bien-etre">Bien-être</NavLink >
                                <NavLink className='p-2 fs-3 menu-light text-center d-flex align-items-center justify-content-center font-link' to="/reservation">Réservation</NavLink >
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    };
}

export default Header;