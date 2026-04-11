import React, { useState } from 'react'
import '../../CSS/HomePage/HomePage.css'
import Img1 from '../../Image/HomePages/Collection banner 4.png'
import Img2 from '../../Image/HomePages/Collection banner 5.png'
import { Container, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Legend = () => {

    const legend = [
        {
            id:1, 
            img: Img1,
            title: 'The Smart Chic',
            link: './'
        },
        {
            id:1, 
            img: Img2,
            title: 'Ready To Go',
            link: './'
        },
    ]

  return (
    <>
        <Container fluid className='p-5'>

            <Row className='g-4'>
                        {legend.map((end) => (
                            <Col key={end.id} xs={12} md={6} lg={6}>
                                <Card className='hover-scale border-0 rounded-0 overflow-hidden position-relative '>
                                    <Card.Link href={end.link}>
                                        <Card.Img src={end.img}
                                        style={{
                                            width: '100%',
                                            height: '800px',
                                            objectFit: "cover",
                                        }}/>
            
                                        <Card.ImgOverlay className='d-flex flex-column justify-content-end p-4 ps-5'>
                                            <Card.Title className='text-hover-scale text-white fs-4 fw-normal md-2'>
                                                {end.title}
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card.Link>
                                    
                                </Card>
                                
                            </Col>
                        ))}
                    </Row>

        </Container>
    </>
  )
}

export default Legend
