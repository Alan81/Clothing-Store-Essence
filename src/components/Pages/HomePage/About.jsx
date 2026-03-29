import React, { useState } from 'react'
import '../../CSS/HomePage/Categories.css'
import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
  return (
    <>
        <Container fluid className='bg-light'>
            <Row>
              <Col className='d-flex justify-content-center'>
                <h3 className='text-about-h3 fs-4'>The Art of Fewer, Better Choices</h3>
              </Col>
            </Row>

            <Row className='text-about'>
              <Col className='text-center '>
                <p>Opting for quality over quantity means selecting timeless, durable, and responsibly made items. This approach simplifies our lives and fosters a deeper appreciation for our surroundings. Emphasizing longevity and responsible production resonates with a more sustainable and mindful lifestyle.</p>
              </Col>
            </Row>
        </Container>
    </>
  )
}

export default About
