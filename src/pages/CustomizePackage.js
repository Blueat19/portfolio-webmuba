import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {useParams} from "react-router-dom"

export default function CustomizePackage() {
  const [cart, setCart] = useState([])
  const params = useParams()
  const [phoneNumber, setPhoneNumber] = useState('')

  const handlePagesChange = (e) => {
    const value = e.target.value

    setCart((prevCart) => {
      if (prevCart.indexOf(value) === -1) {
        return [...prevCart, value]
      }
      return prevCart
    })
  }

  const totalPrice = cart.length * params.pageValue;

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `https://wa.me/263712241838?text=I%20want%20to%20order%20${cart.length}%20pages%20at%20${params.pageValue}%20USD%20per%20page%20with%20the%20following%20content%3A%20${cart.join(',%20')}%0A%0AMy%20phone%20number%20is%20${phoneNumber}`
  }

  return (
    <Container className="mt-10">
      <h2 className="text-2xl font-bold">Customize Package</h2>
      <div>Pakage: {params.pageValue} usd per Page</div>
      <p className="text-xl font-bold">Select the pages you need?</p>
      <Form className="p-4 bg-gray-100 rounded-lg" onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={8}>
            <select className="form-select" value={''} onChange={handlePagesChange}>
              <option >Select Here</option>
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
          </Col>
        </Row>
        <div className="mt-4">
          <strong>Selected Pages Below</strong>
        </div>
        <div className="Cart mt-4">
          {cart.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <p className="text-end text-xl">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <div className="mt-4">
            <input type="text" placeholder='Enter PhoneNumber' required className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <p className="mt-4">Note : <strong>These are only charges for Web Development</strong></p>
          <Button variant="primary" className="mt-4" type='submit'>
            Proceed to Checkout
          </Button>
        </div>
      </Form>
      
    </Container>
  )
}


