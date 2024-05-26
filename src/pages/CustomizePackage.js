import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function CustomizePackage({ pageValue }) {
  const [cart, setCart] = useState([])

  const handlePagesChange = (e) => {
    const value = e.target.value
    setCart((prevCart) => {
      if (prevCart.indexOf(value) === -1) {
        return [...prevCart, value]
      }
      return prevCart
    })
  }

  const totalPrice = cart.length * pageValue

  return (
    <Container className="mt-10">
      <h2 className="text-2xl font-bold">Customize Package</h2>
      <div>Pakage: Level {pageValue} per Page</div>
      <p className="text-xl">Select the pages do you need?</p>
      <Row>
        <Col xs={12} md={8}>
          <select className="bg-gray-200 rounded-md p-2 my-5 w-100" value={''} onChange={handlePagesChange}>
            <option ></option>
            <option value="Home">Home</option>
            <option value="About">About</option>
            <option value="Contact">Contact</option>
            <option value="Pricing">Pricing</option>
            <option value="Product/Services">Product/Services</option>
            <option value="Blog/Articles">Blog/Articles</option>
            <option value="Events">Events</option>
            <option value="SiteMap">SiteMap</option>
            <option value="Portfolio">Portfolio</option>
          </select>
        </Col>
        <Col xs={12} md={4}>
          <p className="text-end text-xl">
            Total: ${totalPrice.toFixed(2)}
          </p>
        </Col>
      </Row>
      <div>Selected Pages Below</div>
      <div className="Cart">
        {cart.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <Button variant="primary" className="mt-4">
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  )
}

