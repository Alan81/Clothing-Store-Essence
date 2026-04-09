import React, { useEffect, useState } from 'react'
import { Modal , Button , Form , Col , Row } from 'react-bootstrap'
import { IoCloseOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css'
import Img1 from '../../Image/HomePages/Advertisement.png'

const Advertisement = () => {

    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [agree, setAgree] = useState(false)

    useEffect(() => {
        const timer = setTimeout (() => {
            const popupClosed = sessionStorage.getItem('popupClosed')
            if (!popupClosed) {
                setShow(true)
            }
        }, 60000)

        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => {
        setShow (false)
        sessionStorage.setItem('popupClosed', 'true')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log ('Email Sudmitted:', email)
        handleClose()
    }
    
  return (
    <>
        <Modal show={show} onHide={handleClose} centered size='xl' backdrop='static' keyboard={true}>
            <Modal.Body className="p-0 position-relative">
                

                <Row className=''>
                    <Col lg={6} className="d-none d-lg-block">
                        <div className="popup-image-side">
                            <img src={Img1} className="w-75"/>
                        </div>
                    </Col>

                    
                    <Col lg={5} className="popup-form-side p-5">
                        
                        <div className="popup-content pt-5">
                            <div className='text-center'>
                                <h5 className="d-flex justify-content-center pb-4">Enter your email to unlock</h5>
                                <h1 className="pb-3 fw-medium">15% off your first order</h1>
                                <p className='pb-3 fw-normal'>Plus, get insider access to promotions, launches, events, and more.</p>
                            </div>
                            
                            
                            <form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Enter your email address" value={email} 
                                onChange={(e) => setEmail(e.target.value)} required className="p-3"/>
                            </Form.Group>


                            <div className='text-center'>
                                <button type="submit" className="border-0 py-3 px-4 bg-dark text-light popup-submit-btn">
                                    Unlock Access
                                </button>
                            </div>
                            
                            </form>
                            
                        </div>
                    </Col>

                    <Col lg={1}>
                        <button type="button" onClick={handleClose} className='bg-none border-none' aria-label="Close"
                        style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '8px',
                                position: 'absolute',
                                top: '10px',
                                right: '10px'
                            }} >
                            <IoCloseOutline size={30} className='bg-none border-0' />
                        </button>
                    </Col>
                </Row>
          
          
            </Modal.Body>
        </Modal>
    </>
  )
}

export default Advertisement
