import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { FiShoppingBag, FiSearch, FiHeart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useCart } from '../Home/CardContent' 
import SearchMenu from '../Search/SearchMenu'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../CSS/Common/Navbar.css'


const MyNavbar = () => {
  
  const [expanded, setExpanded] = useState(false)
  const { wishlistCount, cartCount } = useCart()
  const [showSearch, setShowSearch] = useState(false)
  
  const [activeLink, setActiveLink] = useState('#home') 
  const [topBarHeight, setTopBarHeight] = useState(0)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const topBarRef = useRef(null)
  const navbarRef = useRef(null)
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (topBarRef.current) {
      setTopBarHeight(topBarRef.current.offsetHeight)
    }
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight)
    }
  }, [])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)

    return () => {
      if (sentinel) observer.unobserve(sentinel)
    }
  }, [])


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
        const offset = navbarRef.current?.offsetHeight || 0
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        setActiveLink(link)
      }
    }
  }

  const stickyStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1030,
    backgroundColor: 'white',
    boxShadow: isSticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
    transition: 'box-shadow 0.5s ease'
  }

  const spacerStyles = {
    height: isSticky ? navbarHeight : 0,
    transition: 'height 1s ease'
  }

  return (
    <>
      <div ref={sentinelRef} style={{ position: 'absolute', top: 0, height: '1px' }} />
      
      <Container fluid className="p-0">

        <Row ref={topBarRef} className='bg-black pt-3 text-center fs-6 fw-normal m-0'>
          <Col className='text-light'>
            <p>Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now</p>
          </Col>
        </Row>

        <div style={isSticky ? stickyStyles : {}} ref={navbarRef}>
          <Navbar id='navbar' bg="white" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>

            <Container fluid className='px-3 px-lg-5 '>
              {/* PHONE */}
              <div className="d-flex d-lg-none w-100 align-items-center">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Brand href="hero" className='fs-2 fw-bold mx-auto'>
                  CEIN.
                </Navbar.Brand>

                <Nav className='ms-auto gap-2 flex-row'>

                  <Nav.Link href='#search'>
                    <FiSearch size={22} style={{ cursor: 'pointer' }} onClick={() => setShowSearch(true)}/>
                  </Nav.Link>

                   <SearchMenu show={showSearch} onClose={() => setShowSearch(false)} />
                  

                  <Nav.Link href='#profile'>
                    <CgProfile size={21} />
                  </Nav.Link>

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

                  <Nav.Link href="#home" onClick={(e) => handleClick(e, '#home')}>
                    Shop
                  </Nav.Link>

                  <Nav.Link href="#NewArrivals" onClick={(e) => handleClick(e, '#NewArrivals')}>
                    New Arrivals
                  </Nav.Link>

                  <Nav.Link href="#Sales" onClick={(e) => handleClick(e, '#Sales')}>
                    Sales
                  </Nav.Link>

                  <Nav.Link href="#Journal" onClick={(e) => handleClick(e, '#Journal')}>
                    Journal
                  </Nav.Link>
                  
                </Nav>
                
                <Nav className='ms-auto gap-2 flex-row'>
                  <Nav.Link href='#search'>
                    <FiSearch size={22} style={{ cursor: 'pointer' }} onClick={() => setShowSearch(true)}/>
                  </Nav.Link>

                   <SearchMenu show={showSearch} onClose={() => setShowSearch(false)} />
                  
                  <Nav.Link href='#profile'>
                    <CgProfile size={21} />
                  </Nav.Link>

                  <Nav.Link href='#wishlist'>
                    <FiHeart size={29} style={iconStyle} /> 
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

                  <Nav.Link href="#home" onClick={(e) => handleClick(e, '#home')}>
                    Shop
                  </Nav.Link>

                  <Nav.Link href="#NewArrivals" onClick={(e) => handleClick(e, '#NewArrivals')}>
                    New Arrivals
                  </Nav.Link>

                  <Nav.Link href="#Sales" onClick={(e) => handleClick(e, '#Sales')}>
                    Sales
                  </Nav.Link>

                  <Nav.Link href="#Journal" onClick={(e) => handleClick(e, '#Journal')}>
                    Journal
                  </Nav.Link>

                </Nav>
              </Navbar.Collapse>

            </Container>

          </Navbar>

        </div>

      <div style={spacerStyles} />
      </Container>
    </>
  )
}

export default MyNavbar