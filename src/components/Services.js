import React,{Link}from "react";
import y from "../images/mubaiwaK.jpg"
import games from "../images/games.png"
import webd from "../images/web design.jpeg"
import about from "../images/about Us.jpg"
import buss from "../images/business re.jpg"
import social from "../images/social-media-marketing.webp"
import ban from "../images/Banner.jpg"
export default function Services() {
  const features = [
    {
      title: "Web Design",
      img: webd,
      description: "Create visually appealing and user-friendly web designs that enhance user experience and engagement.",
      link: "/webd",
    },
    {
      title: "About",
      img: about,
      description: "Learn about our team, mission, and values, and discover what makes us unique in the industry.",
      link: "/about",
    },
    {
      title: "Business Suite",
      img: buss,
      description: "Access a comprehensive suite of tools designed to optimize business operations and improve productivity.",
      link: "/business",
    },
    {
      title: "Social Media Marketing",
      img: social,
      description: "Boost your brand's visibility and reach through strategic social media marketing campaigns.",
      link: "/marketing",
    },
    {
      title: "Banner Design",
      img: ban,
      description: "Create eye-catching banners that effectively convey your message and attract your target audience.",
      link: "/banner",
    },
    {
      title: "Pc Games",
      img: games,
      description: "Explore a diverse collection of exciting PC games that offer hours of entertainment and challenge.",
      link: "/gaming",
    },
  ];

  return (
    <div className="container mt-4">

      <div className="row mt-4">
        {features.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div
             style={{textAlign:"center"}}
            className="card mb-4 box">
              <div className="card-body">
                <div className="card-img">
                <img
                 src ={item.img}
                 alt={item.description}
                 width={300}
                 height={200}
                /> 
                </div>
                <h3 className="card-title font-semibold">
                  {item.title}
                </h3>
                <p className="card-text text-muted" >{item.description}</p>
              </div>
              <div
              className="btn btn-primary"
              >
               <a href={item.link}
                style={{color:"white",textDecoration:"none"}}
               >EXPLORE</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}