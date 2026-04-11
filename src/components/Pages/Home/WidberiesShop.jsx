import React, { useState } from 'react'
import Img1 from '../../Image/HomePages/image 1.png'
import Img2 from '../../Image/HomePages/image 2.png'
import Img3 from '../../Image/HomePages/image 3.png'
import Img4 from '../../Image/HomePages/image 4.png'
import Img5 from '../../Image/HomePages/image 5.png'
import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const WibberiesShop = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const galleryGrid = [
        { id: 1, img: Img1 },
        { id: 2, img: Img2 },
        {
            id: 3,
            img: Img3,
        },
        {
            id: 4,
            img: Img4,
        },
        {
            id: 5,
            img: Img5,
        },
    ]

        const slides = galleryGrid.map(item => ({ src: item.img }))
  return (
    <>
        <Container fluid className='p-5'>

            <Row className='p-5'>
                <Col className='text-center fs-5'>
                    <p>Shop Widberries</p>
                </Col>
            </Row>

            <Row className='g-3 mb-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5'>
                {galleryGrid.map ((item, index) => (
                    <Col key={item.id} className="d-flex justify-content-center gap-3">
                        <div onClick={() => {setPhotoIndex(index), setIsOpen(true)}} style={{cursor: 'pointer'}}>
                            <img src={item.img} alt={`Gallery ${index + 1}`} 
                            style={{ width: '270px', height: 'auto' }}/>
                        </div>
                    </Col>
                ))}
            </Row>
            <Lightbox open={isOpen} close={() => setIsOpen(false)} index={photoIndex} slides={slides} animation={{fade: 300}} controller={{ closeOnBackdropClick: true}}/>
        </Container>
    </>
  )
}

export default WibberiesShop
