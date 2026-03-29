import React from 'react'
import Img1 from '../../Image/HomePages/Clothes 1.png'
import Img2 from '../../Image/HomePages/Clothes 2.png'
import Img3 from '../../Image/HomePages/Clothes 3.png'
import Img4 from '../../Image/HomePages/Clothes 4.png'
import Img5 from '../../Image/HomePages/Clothes 5.png'
import { FiHeart, FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { Container, Card, Col, Row } from 'react-bootstrap'
import { useCart } from '../HomePage/CardContent'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductGrid = () => {

  const { addToWishlist, addToCart, removeFromWishlist, wishlistItems} = useCart()

  const products = [
    {
      id: 1,
      img: Img1,
      title: 'Classic Easy Zipper Tote',
      price: '$298',
      link: '/product/1'
    },
    {
      id: 2,
      img: Img2,
      title: 'Concertina Phone Bag',
      price: '$248',
      link: '/product/2'
    },
    {
      id: 3,
      img: Img3,
      title: 'Wool Cashmere Sweater Coat',
      price: '$398',
      link: '/product/3'
    },
    {
      id: 4,
      img: Img4,
      title: 'Single-Origin Cashmere Beania',
      price: '$98',
      link: '/product/4'
    },
    {
      id: 5,
      img: Img5,
      title: 'Alpaca Wool Cropped Cardigan',
      price: '$248',
      link: '/product/5'
    },
  ]

  const iconStyle = { 
    verticalAlign: 'middle', 
    paddingLeft: '0.25rem',
    paddingRight: '0.25rem'
  }

   const handleAddToWishlist = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addToWishlist(product)

    const isFavorite = wishlistItems.some(item => item.id === product.id)
    if (isFavorite) {
      removeFromWishlist (product.id) 
    } else {
      addToWishlist (product)
    }
  }

  

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <Container fluid className='p-5'>
   
      <Row className='mb-4'>
        <Col>
          <h4 className=''>What To Wear Now</h4>
        </Col>
      </Row>

      <Row className='g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5'>
        {products.map((product) => {
          const isFavorite = wishlistItems.some(item => item.id === product.id)
          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={2.4} className="custom-col">            
            <Card className='hover-scale border-0 rounded-0 overflow-hidden position-relative h-100'>
              <a href={product.link} className='text-decoration-none'>
                <Card.Img src={product.img}
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: "cover",
                }}/>

              <Card.ImgOverlay className='d-flex align-items-end flex-column bd-highlight p-3 ps-4'>
                <div>
                  <button 
                    className='bg-white rounded-circle p-2 border-0 d-flex align-items-center justify-content-center'
                    style={{ width: '36px', height: '36px' }}
                    onClick={(e) => {
                      handleAddToWishlist (e, product)
                    }}>
                      {isFavorite ? ( 
                        <FaHeart size={18}/>
                      ) :(
                        <FiHeart size={18} />
                      )}
                    
                  </button>
                </div>

                <div className='mt-auto mb-5 pb-5 '>
                  <button className='bg-white rounded-circle p-2 border-0 d-flex align-items-center justify-content-center '
                    style={{ width: '36px', height: '36px' }}
                    onClick={(e) => {
                      handleAddToCart (e, product)
                    }}
                    >
                    <FiPlus size={18} />
                  </button>                  
                </div>
                  
                
              </Card.ImgOverlay>                
                
              </a>
              
              <Card.Body className='p-3'>
                <Card.Title className='fs-6 fw-normal mb-1'>
                  <a href={product.link} className='text-dark text-decoration-none'>
                    {product.title}
                  </a>
                </Card.Title>
                <Card.Text className='fw-semibold mb-0 text-start'>
                  {product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ProductGrid