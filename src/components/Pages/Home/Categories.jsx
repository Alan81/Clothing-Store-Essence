import React, { useState } from 'react'
import '../../CSS/HomePage/HomePage.css'
import Img1 from '../../Image/HomePages/Collection banner.png'
import Img2 from '../../Image/HomePages/Collection banner 2.png'
import Img3 from '../../Image/HomePages/Collection banner 3.png'
import { Container, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Categories = () => {

    const categories = [
        {
            id: 1,
            img: Img1,
            title: 'New Arrivals',
            link: '/newArrivals'
        },
        {
            id: 2,
            img: Img2,
            title: 'The Casual Edits',
            link: '/theCasualEdits'
        },
        {
            id: 3,
            img: Img3,
            title: 'Best-Seller',
            link: '/Best-Seller'
        },
    ]

  return (
    <>
    <Container fluid className='p-5'>
        <Row className='align-item start'>
            <Col>
                <p className='fs-5 fw-medium'>Elevate your lifestyle with a more intelligent, superior wardrobe. <br/>
                Our range is crafted sustainably with longevity in mind.</p>
            </Col>
        </Row>

        <Row className='g-4'>
            {categories.map((category) => (
                <Col key={category.id} xs={12} md={4}>
                    <Card className='hover-scale border-0 rounded-0 overflow-hidden position-relative '>
                        <Card.Link href={category.link}>
                            <Card.Img src={category.img}
                            style={{
                                width: '100%',
                                height: '600px',
                                objectFit: "cover",
                            }}/>

                            <Card.ImgOverlay className='d-flex flex-column justify-content-end p-4 ps-5'>
                                <Card.Title className='text-hover-scale text-white fs-4 fw-normal md-2'>
                                    {category.title}
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

export default Categories
