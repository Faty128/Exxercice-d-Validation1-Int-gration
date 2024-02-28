import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import orangeImage from '../assets/img/orange.png'
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
  <div>
    <header className='bg-info'>
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="navbar" href="#sunnyside">Sunnyside</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Container>

    </Navbar>
       <h1 className='titre text-uppercase'>We are creatives</h1>
        <div className="my-image">
          <img className='img-orange img-fluid w-50' src={orangeImage} alt="" />
        </div>       
    </header>
  
  </div>
  );
}
