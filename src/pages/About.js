import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import innopsp  from "../images/innopsp.png"
import nyasha from "../images/nyasha.jpg"
import mubaiwaK from "../images/mubaiwaK.jpg"
import { motion } from "framer-motion";

const employees = [
    
    {
    name: "Kumbirai Mubaiwa",
    job: "Software Engineer",
    picture: mubaiwaK, 
  },
  {
    name: "Innocent",
    job: "Software Engineer",
    picture: innopsp, 
  },
  {
    name: "Nyasha Chiyando",
    job: "Computer Engineer",
    picture: nyasha, 
  },
  ];

export default function About (){
  return (
    <>
     
      <motion.div
       initial ={{x: "100vw"}}
       animate={{ x: 0}}
       transition={{ type: "spring" , delay: 0.5}}
      >
      <h1 className="text-center">We are a small passionate team.</h1>
      <div className="flex flex-col items-center gap-3 mx-auto max-w-4xl mt-16">
        <h2 className="font-bold text-3xl text-gray-800 text-center">
          Empowering the world with world-class websites.
        </h2>
        <p className="text-lg leading-relaxed text-slate-500 text-center">
          We're a multi-cultural team from around Zimbabwe. We come from diverse
          backgrounds, bringing different personalities, experiences, and skills
          to the job. This is what makes our team so special.
        </p>
      </div>
      <motion.div 
      className="flex justify-center gap-10 mx-auto max-w-4xl mt-12"
       initial={{ scale: 0.1 }} // Initial scale (start out small)
        animate={{ scale: 1 }} // Final scale (get bigger)
        transition={{ delay: 1.5 ,duration: 1.5 }} // Transition duration (1 second)
      >
        <Row className="justify-content-center">
      {employees.map((employee, index) => (
        <Col xs={12} sm={6} md={4} key={index} className="mb-4">
          <Card>
            <Card.Img
             variant="top" 
             src={employee.picture}
             width={200}
             />
            <Card.Body>
              <Card.Title>{employee.name}</Card.Title>
              <Card.Text>{employee.job}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </motion.div>
      </motion.div>
    </>
  );
};

 