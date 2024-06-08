import React, { useState } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  const location = useLocation();
  const showBrand = location.pathname !== '/';
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {showBrand && (
            <Navbar.Brand href="/">
              <div>
                <img src={require('../assets/vinterlogo.png')} alt='Osa logo' className="brand-logo" />
              </div>
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto custom-toggle" onClick={handleToggle}>
            <span className='toggleletters'>{isToggled ? 'X Close' : ' Menu'}</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navele" id="navele1" href="/events">EVENTS</Nav.Link>
              <Nav.Link className="navele" id="navele2" href="/leaderboard">LEADERBOARD</Nav.Link>
              <Nav.Link className="navele" id="navele3" href="/Sponsors">OUR SPONSORS</Nav.Link>
              <Nav.Link className="navele" id="navele4" href="/Contact">CONTACT</Nav.Link>
              <Nav.Link className="navele" id="navele5" href="/form">GALLERY</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navb;

