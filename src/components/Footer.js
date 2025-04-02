import logo from "../images/logowhite.png"
import { FaFacebook, FaWhatsapp,FaInstagram,FaTwitter,FaYoutube} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
     className="my-20 py-4"
     style={{textAlign: "center", backgroundColor: "black"}}
    >
      <div className = "row">
        <div
          className="col-12 col-md-4 row"
        >
           <div className="col-12">
           <img
                src={logo}
                height={"160"}
                 width={"160"}
                 alt="Scott CyberWorld Logo"
                />   
           </div>
           <div className="col-12">
             <p
                style={{color: "white"}}
             ><strong>SW</strong></p>
           </div>
        </div>
         <div className="col-12 col-md-4">
         <p className="text-center text-xs text-red-500 mt-1">
         <h4
           style={{color: "white"}}         
         >Social Media Links</h4>
        <p>
        <FaWhatsapp
        style={{alignSelf: "center", width: "30px", height: "30px", color: "green"}}
        onClick={() => {
          window.location.href = "https://api.whatsapp.com/send?phone=+26371 224 1838&text=Hello%2C%20I%20would%20like%20some%20Assistance.";
        }}
       />
       <br/>
       <FaFacebook
        style={{alignSelf: "center", width: "30px", height: "30px", color: "blue"}}
       />
       <br/>
       <FaInstagram
        style={{alignSelf: "center", width: "30px", height: "30px", color: "pink"}}
       />
       <br/>
       <FaTwitter
        style={{alignSelf: "center", width: "30px", height: "30px", color: "blue"}}
       />
       <br/>
       <FaYoutube
        style={{alignSelf: "center", width: "30px", height: "30px", color: "red"}}
       />
        </p>
       </p>
         </div>
         <div className="col-12 col-md-4">
         <h4
         style={{color: "white"}}      
         >DoorMat Navigation</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/webd">Web Design</a></li>
                <li><a href="/business">Business Design</a></li>
                <li><a href="/Marketing">Marketing_and_Design</a></li>
                <li><a href="/banner">Banner_Design</a></li>
                <li><a href="#top">Back To Top</a></li>
              </ul>
         </div>
      </div>
      <p
         style={{color: "white"}}      
      className="text-center text-xs text-red-500 mt-1">
        Made by{" "}
        <img
            height={"50"}
            width={"40"}
            src={logo}
            alt="Website favicon"
            onClick={() => {
            window.location.href = "https://webmuba.netify.app/";
             }}
            className="inline cursor-pointer"
          />
           <p 
           style={{color: "white"}}      
           className="text-center text-sm text-red-500">
              Copyright © {new Date().getFullYear()} Scott's CyberWorld. All rights reserved.
            </p>
        </p>
    </footer>
  );
}
