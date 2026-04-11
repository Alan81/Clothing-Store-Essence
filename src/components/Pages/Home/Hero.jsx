import React, { useState } from 'react'
import '../../CSS/HomePage/HomePage.css'
import Img1 from '../../Image/HomePages/content.png'
import { Container, Button, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Hero = () => {
  const bgPattern = {
    backgroundImage: `url(${Img1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "94vh", 
  }

  return (
    <div id='hero'>
      <Container fluid className='p-0' style={bgPattern}>
        <Row className='align-items-end' style={{ minHeight: "90vh" }}>
          <Col lg={6} className="pb-5 p-0 p-sm-3 p-md-5"> {/* Он будет меня слушаться или я по приколу пишу? */}
            <p className="px-5 fs-2 fw-medium text-light mb-4">
              Elevate Your Style<br />
              Timeless Fashion, Sustainable Choices
            </p>
            <Button className='hero-button bg-white mx-5 text-dark fw-medium border-0 rounded-0' variant='none' size="lg">
              <a href="#" className='text-decoration-none text-dark '>Shop Now</a>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
