import React, { useState } from 'react'
import '../../CSS/HomePage/HomePage.css'
import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const VisitUs = () => {
  return (
    <>
        <Container fluid className='bg-light'>
                    <Row>
                      <Col className='d-flex justify-content-center'>
                        <h3 className='text-about-h3 fs-4'>Visit Us</h3>
                      </Col>
                    </Row>
        
                    <Row className='text-about'>
                      <Col className='text-center '>
                        <p>Embrace the "Less, but better" philosophy in real life at out brick-and-mortar stores, where the servicce and immediate satisfaction of a retail of a retail harmonize seamlessly with the intimacy and customization of an atelier.</p>
                      </Col>
                    </Row>
                </Container>
    </>
  )
}

export default VisitUs
