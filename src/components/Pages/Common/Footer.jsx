import React, { useState } from 'react'
import { Container, Nav, Navbar, Col, Row, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {

  const [email, setEmail] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <Navbar as='footer' className='mt-auto footer'>
      <Container style={{display: "block"}}>
        <Row className='g-4  align-items-stretch'>
          
          <Col xs={12} md={6} lg={2}>
            <h6 className='fw-medium mb-3'>CONTACT US</h6>
            <div className='d-flex flex-column gap-1 pt-2'>
              <p className='text-dark mb-0 pb-2'>+1 (844) 326-6000</p>
              <p className='text-dark mb-0 pb-2'>Email Us</p>
              <p className='text-dark mb-0 pb-1'>Mon-Fri 9am-3pm PT</p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={2}>
            <h6 className='fw-medium mb-3'>CUSTOMERS</h6>
            <Nav className='flex-column gap-1'>
              <Nav.Link href='/start' className='text-dark ps-0 pb-0'>Start a Return</Nav.Link>
              <Nav.Link href='/policy' className='text-dark ps-0 pb-0'>Return Policy</Nav.Link>
              <Nav.Link href='/FAQ' className='text-dark ps-0 pb-0'>FAQ</Nav.Link>
              <Nav.Link href='/mailers' className='text-dark ps-0 pb-0'>Catalogs and Mailers</Nav.Link>
              <Nav.Link href='/group' className='text-dark ps-0  pb-0'>About Group Gifting</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <h6 className='fw-medium mb-3'>COMPANY</h6>
            <Nav className='flex-column gap-1'>
              <Nav.Link href='/about' className='text-dark ps-0 pb-0'>About Us</Nav.Link>
              <Nav.Link href='/sustainability' className='text-dark ps-0 pb-0'>Sustainability</Nav.Link>
              <Nav.Link href='/discover' className='text-dark ps-0 pb-0'>Discover Revive</Nav.Link>
              <Nav.Link href='/careers' className='text-dark ps-0 pb-0'>Careers</Nav.Link>
              <Nav.Link href='/privacy' className='text-dark ps-0 pb-0'>Privacy Policy</Nav.Link>
              <Nav.Link href='/terms' className='text-dark ps-0 pb-0'>Terms</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <h5 className='fw-medium text-dark mb-3'>Get the latest news from us</h5>
            <form onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Control 
                  type='email' 
                  placeholder='Enter your email address'
                  size='sm'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='p-3 fw-medium rounded-0'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Check 
                  type='checkbox'
                  label='By signing up, you agree to our Privacy Policy and Terms of Service.'
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                  className='small text-muted'
                />
              </Form.Group>

              <button type='submit' className='btn btn-dark w-30 btn-sm px-4 py-2 rounded-0 '>
                Subscribe
              </button>
            </form>
          </Col>
        </Row>

        <p className='align-items-end fs-5 mt-5'>@CEIN</p>
      </Container>
    </Navbar>
  )
}

export default Footer