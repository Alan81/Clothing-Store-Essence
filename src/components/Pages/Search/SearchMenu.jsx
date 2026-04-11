import React, { useEffect, useState , useRef } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../../CSS/Search/Search.css'

const SearchMenu = ({ show, onClose }) => {
    const menuRef = useRef(null)
    const searchInputRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose()
            }
        }

        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        if (show) {
            setTimeout(() => {
                document.addEventListener ('mousedown', handleClickOutside)
            }, 0)
            document.addEventListener('keydown', handleEsc)
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = 'unset'
        }
    }, [show, onClose])

    if (!show) return null

    return (
        <>
        <div className="search-overlay" onClick={onClose} />
        
        <div className="search-menu" ref={menuRef}>
            <Container fluid className="px-3 px-lg-5">

            <Row className="search-row">
                <Col className="search-input-wrapper">
                    <input ref={searchInputRef} type="text"  placeholder="Search for products, categories, or ideas..." className="search-input" autoFocus onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()} />
                    <button className="search-close" onClick={onClose}>✕</button>
                </Col>
            </Row>

            {/* Категории */}
            <Row className="categories-row">
                <Col lg={3} md={4} sm={6} xs={12} className="category-column">
                <div className="category-group">
                    <h4 className="category-title">Categories</h4>
                    <ul className="category-list">
                    <li>Featured</li>
                    <li>Collections</li>
                    <li>Bags</li>
                    <li>New Arrivals</li>
                    <li>Party & events</li>
                    </ul>
                </div>
                </Col>

                <Col lg={3} md={4} sm={6} xs={12} className="category-column">
                <div className="category-group">
                    <h4 className="category-title">Clothing</h4>
                    <ul className="category-list">
                    <li>Bestsellers</li>
                    <li>Office looks</li>
                    <li>Leather Goods</li>
                    <li>Trending Now</li>
                    <li>Selection</li>
                    </ul>
                </div>
                </Col>

                <Col lg={3} md={4} sm={6} xs={12} className="category-column">
                <div className="category-group">
                    <h4 className="category-title">Accessories</h4>
                    <ul className="category-list">
                    <li>Loungewear</li>
                    <li>Online Exclusive</li>
                    <li>Gifts</li>
                    <li>Knitwear</li>
                    <li>Shop All</li>
                    </ul>
                </div>
                </Col>

                <Col lg={3} md={4} sm={6} xs={12} className="category-column">
                <div className="category-group">
                    <h4 className="category-title">Total Look</h4>
                    <ul className="category-list">
                    <li>Basics</li>
                    <li>Stores</li>
                    </ul>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
        </>
    )
}

export default SearchMenu