import React, { useState, useEffect, useRef } from 'react'
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useCart } from '../../Pages/HomePage/CardContent' 
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../CSS/HomePage/Navbar.css'

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false)
  const { wishlistCount, cartCount } = useCart()
  
  const [activeLink, setActiveLink] = useState('#home') 
  const [topBarHeight, setTopBarHeight] = useState(0)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const topBarRef = useRef(null)
  const navbarRef = useRef(null)

  useEffect(() => {
    if (topBarRef.current) {
      setTopBarHeight(topBarRef.current.offsetHeight)
    }
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight)
    }
  }, [])

  const totalHeight = topBarHeight + navbarHeight

  const iconStyle = { 
    verticalAlign: 'middle', 
    paddingLeft: '0.25rem',
    paddingRight: '0.25rem'
  }

  const handleClick = (e, link) => {
    e.preventDefault()
    setExpanded(false)

    if (link.startsWith('/')) {
      window.location.href = link 
      return
    } else {
      const targetId = link.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        })
        setActiveLink(link)
      }
    }
  }

  return (
    <>
      <div 
        ref={topBarRef}
        className='top-bar py-2 text-center fs-6 fw-normal navbar-advertising fixed-top'
        style={{ top: 0, zIndex: 1030 }}>
        <Container>
          <span>Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now</span>
        </Container>
      </div>

      <Navbar 
        id='navbar'
        ref={navbarRef}
        bg="white" 
        expand="lg" 
        expanded={expanded} 
        onToggle={() => setExpanded(!expanded)}
        fixed="top"
        style={{ top: `${topBarHeight}px` }}>
        <Container fluid className='px-3 px-lg-5'>
          {/* PHONE */}
          <div className="d-flex d-lg-none w-100 align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="hero" className='fs-2 fw-bold mx-auto'>
              CEIN.
            </Navbar.Brand>

            <Nav className='ms-auto gap-2 flex-row'>
              <Nav.Link href='#search'><FiSearch size={22}/></Nav.Link>
              <Nav.Link href='#profile'><CgProfile size={21} /></Nav.Link>
              <Nav.Link href='#wishlist'>
                <FiHeart size={28} style={iconStyle} /> 
                <span style={iconStyle}>{wishlistCount}</span>
              </Nav.Link>
              <Nav.Link href='#cart'>
                <FiShoppingBag size={28} style={iconStyle} /> 
                <span style={iconStyle}>{cartCount}</span>
              </Nav.Link>
            </Nav>
          </div>

          {/* DESKTOP */}
          <div className='d-none d-lg-flex w-100 align-items-center'>
            <Navbar.Brand href="#hero" className='fs-2 fw-bold'>
              CEIN.       
            </Navbar.Brand>

            <Nav className="me-auto px-lg-5 px-md-3 gap-lg-5 gap-md-3">
              <Nav.Link href="#home" onClick={(e) => handleClick(e, '#home')}>Shop</Nav.Link>
              <Nav.Link href="#NewArrivals" onClick={(e) => handleClick(e, '#NewArrivals')}>New Arrivals</Nav.Link>
              <Nav.Link href="#Sales" onClick={(e) => handleClick(e, '#Sales')}>Sales</Nav.Link>
              <Nav.Link href="#Journal" onClick={(e) => handleClick(e, '#Journal')}>Journal</Nav.Link>
            </Nav>
            
            <Nav className='ms-auto gap-2 flex-row'>
              <Nav.Link href='#search'><FiSearch size={22}/></Nav.Link>
              <Nav.Link href='#profile'><CgProfile size={21} /></Nav.Link>
              <Nav.Link href='#wishlist'>
                <FiHeart size={28} style={iconStyle} /> 
                <span style={iconStyle}>{wishlistCount}</span>
              </Nav.Link>
              <Nav.Link href='#cart'>
                <FiShoppingBag size={28} style={iconStyle} /> 
                <span style={iconStyle}>{cartCount}</span> 
              </Nav.Link>
            </Nav>
          </div>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-lg-none flex-column pt-3 gap-2">
              <Nav.Link href="#home" onClick={(e) => handleClick(e, '#home')}>Shop</Nav.Link>
              <Nav.Link href="#NewArrivals" onClick={(e) => handleClick(e, '#NewArrivals')}>New Arrivals</Nav.Link>
              <Nav.Link href="#Sales" onClick={(e) => handleClick(e, '#Sales')}>Sales</Nav.Link>
              <Nav.Link href="#Journal" onClick={(e) => handleClick(e, '#Journal')}>Journal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div style={{ marginTop: `${totalHeight}px` }}></div>
    </>
  )
}

export default MyNavbar