import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"; // Ensure Row is imported
import { motion } from "framer-motion";

export default function Pricing() {
  const pricing = [
  {
   name: "Level 1",
   price: "25 Usd Per Page",
   popular: false,
   features: [
    "Simple and stylish pages",
    "Basic functionalities",
    "Basic Integrations",
    "Community Support",
   ],
   button: {
    text: "Get Started",
    link: "/",
   },
  },
  {
   name: "Level 2",
   price: "45 Usd Per Page", // Updated this line
   popular: true,
   features: [
    "Animated and stylish pages",
    "Functionalities",
    "Basic Integrations",
    "Community Support",
   ],
   button: {
    text: "Get Started",
    link: "#",
   },
  },
  {
   name: "Premium",
   price: "60 Usd Per Page",
   popular: false,
   features: [
    "User Authentication",
    "Database Interaction",
    "Dedicated Account Manager",
    "24/7 Phone Support",
   ],
   button: {
    text: "Contact us",
    link: "/contact",
   },
  },
 ];
  return (
    <>
     
      <h2 className="font-bold text-3xl text-gray-800 text-center">
          Choose the right plan for your needs
        </h2>
      <motion.div 
      drag="x"
      dragConstraints = {{left:0 , right:0}}
      className="flex flex-col items-center gap-3 mx-auto max-w-4xl mt-16"
       initial ={{x: "100vw"}}
       animate={{ x: 0}}
       transition={{ type: "spring" , delay: 0.5}}
      
      >
        
         <div className="flex flex-col items-center gap-3 mx-auto max-w-4xl mt-16 center ">
        <Row xs={0.5} sm={2} md={4} className="justify-content-center"> {/* Adjust grid sizes as needed */}
          {pricing.map((plan, index) => (
            <Col key={index} className="mb-4">
              <Card 
              key={index} style={{ width: "18rem" }}
              >
                {/* Highlight popular plans */}
                {plan.popular && (
                  <Card.Header className="text-center bg-warning text-white">
                    Popular
                  </Card.Header>
                )}
                <Card.Body>
                  <Card.Title className="text-center">{plan.name}</Card.Title>
                  <Card.Text className="text-center">{plan.price}</Card.Text>
                 <motion.div 
                  className="text-center mt-4"
                  whileHover={{ scale: 1.1}}
                  initial={{ x: "100vw"}}
                  animate={{ x: 0}}
                   transition={{ type: "spring" , delay: 1}}
                  >
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                   </motion.div>
                  <motion.div 
                  className="text-center mt-4"
                  whileHover={{ scale: 1.1}}
                  initial={{ x: "-100vw"}}
                  animate={{ x: 0}}
                   transition={{ type: "spring" , delay: 1}}
                  >
                    <Button variant="primary" href={plan.button.link}>
                      {plan.button.text}
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      </motion.div>
    </>
  );
}
