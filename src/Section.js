import { Col, Container, Row } from 'react-bootstrap';
import img1 from "./assets/img/oeufs.png";
import img2 from "./assets/img/tasse-fréze.png";
import img3 from "./assets/img/pomme-rouge.png";
import img4 from "./assets/img/clémentis.png";
import img5 from "./assets/img/personne1.jpg";
import img6 from "./assets/img/personne2.jpg";
import img7 from "./assets/img/personne3.jpg";
import img8 from "./assets/img/WhatsApp Image 2024-02-09 at 21.14.28 (1).jpeg";
import img9 from "./assets/img/WhatsApp Image 2024-02-09 at 21.14.28 (2).jpeg";
import img10 from "./assets/img/WhatsApp Image 2024-02-09 at 21.14.28 (3).jpeg";
import img11 from "./assets/img/WhatsApp Image 2024-02-09 at 21.14.28 (4).jpeg";
import React from 'react';

function Section() {
    return (
        <div>
<Container fluid>
      <Row>
       <Col sm={6} md={6} className="transforme p-5">
        <h2 className='text-dark'>Transform your brand</h2>
        <p className='text-align-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
           Minus similique architecto aut perferendis, explicabo,  <br />
           est suscipit , deserunt vitae atque natus possimus dolorum ?
        </p>
        <h5>Learn More</h5>
        </Col>
        <Col sm={6} md={6} className="img-of">
          <img className='w-50 h-100 p-4' src={img1} alt="" />
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={6} className='img-frg p-5'>
          <img className='w-50 h-100' src={img2} alt="" />

        </Col>
        <Col sm={6} md={6} className='transforme p-5'>
        <h2 className='text-dark'>Stand Out to the right audience</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
           Minus similique architecto aut perferendis, explicabo,  <br />
           est suscipit , deserunt vitae atque natus possimus dolorum ?
        </p>
        <h5>Learn More</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={6} className='img-pomme p-4'>
          <img src={img3} alt="" />

        <h4 className='text-dark mt-2'>Graphic Design</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Nobis qui inventore id provident sit tempore voluptates <br />
          obcaecati eveniet fugiat recusandae.
        </p>       
        </Col>
        <Col sm={6} md={6} className='img-clementis p-4'>
          <img src={img4} alt="" />

        <h4 className='text-dark mt-2'>Photography</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Nobis qui inventore id provident sit tempore voluptates <br />
          obcaecati eveniet fugiat recusandae.
        </p>
        </Col>
      </Row>
      <Row className='sec-clients p-5'>
        <h2 className='p-4'>CLIENT TESTIMONIALS</h2>
        <Col sm={6} md={4} className='mt-5'>
          <img className='personne1' src={img5} alt="" />

        <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Nobis qui inventore id provident sit tempore voluptates <br />
          obcaecati eveniet fugiat recusandae.
        </p> 
        <h5>Emily R.</h5>
        <p1>Markting Director</p1>      
        </Col>
        <Col sm={6} md={4} className='mt-5'>
          <img className='personne2' src={img6} alt="" />

        <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Nobis qui inventore id provident sit tempore voluptates <br />
          obcaecati eveniet fugiat recusandae.
        </p> 
        <h5>Thomas S.</h5>
        <p2>Chef Operating Officer</p2>      
        </Col>
        <Col sm={6} md={4} className='mt-5'>
          <img className='personne3' src={img7} alt="" />

        <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Nobis qui inventore id provident sit tempore voluptates <br />
          obcaecati eveniet fugiat recusandae.
        </p> 
        <h5>Jennie F.</h5>
        <p3>Business Owner</p3>      
        </Col>
      </Row>
      <Row>
       <div className="img-sect">
       <Col sm={3} md={3} className=''>
          <img className='img img-fluid' src={img8} alt="" />
      
        </Col>
        <Col sm={3} md={3} className=''>
          <img className='img img-fluid' src={img9} alt="" />
      
        </Col>
        <Col sm={3} md={3} className=''>
          <img className='img img-fluid' src={img10} alt="" />
      
        </Col>
        <Col sm={3} md={3} className=''>
          <img className='img img-fluid' src={img11} alt="" />
      
        </Col>
       </div>
      </Row>
      <Row>
        <div className='sec-sunnyside p-5'>
        <h3>Sunnyside</h3>
          <div className="sunnyside p-5">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
          </div>
          <div className="icons">
          <a href="#">
          <i class="fa-brands fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
          <i class="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#">
          <i class="fa-brands fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#">
          <i class="fa-brands fa-pinterest" aria-hidden="true"></i>
          </a>
          </div>
        </div>
      </Row>
   
    </Container>
        </div>
    )
}

export default Section;
