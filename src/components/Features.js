import React from "react";
import { FaGlobe, FaServer, FaPalette, FaFileAlt, FaEnvelope, FaShoppingCart } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Domain Name",
      description: "Register a unique domain name, which is the address of your website on the internet.It will help your customers find you online in an easier way",
      icon: <FaGlobe size={40} />,
    },
    {
      title: "Web Hosting",
      description: "Choose a reliable web hosting provider and purchase a hosting plan to store your website's files and make it accessible online.",
      icon: <FaServer size={40} />,
    },
    {
      title: "Design and Layout",
      description: "Define the desired design, layout, color scheme, typography, and branding elements for your website.",
      icon: <FaPalette size={40} />,
    },
    {
      title: "Content",
      description: "Provide the content for your website, including text, images, videos, and other media.",
      icon: <FaFileAlt size={40} />,
    },
    {
      title: "Contact Form",
      description: "Specify the required fields and functionality for a contact form on your website to allow visitors to get in touch with you.",
      icon: <FaEnvelope size={40} />,
    },
    {
      title: "E-commerce",
      description: "If you plan to sell products or services online, let us  integrate an e-commerce functionality for you.",
      icon: <FaShoppingCart size={40} />,
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row mt-4">
        {features.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4 box">
              <div className="card-body">
                <h3 className="card-title font-semibold">
                  {item.icon} {item.title}
                </h3>
                <p className="card-text text-muted" >{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}