import favicon from "../components/logo.png";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="my-20 py-4">
      <div
        className="bg-gradient-to-t from-red-500 to-transparent"
        style={{ height: "10px" }}
      ></div>
      <p className="text-center text-sm text-red-500">
        Copyright © {new Date().getFullYear()} Murewa Cps. All rights reserved.
      </p>
      <p className="text-center text-xs text-red-500 mt-1">
        Connect with us:{" "}
        <p>
        <FaWhatsapp
        style={{alignSelf: "center", width: "30px", height: "30px", color: "green"}}
        onClick={() => {
          window.location.href = "https://api.whatsapp.com/send?phone=+26371 224 1838&text=Hello%2C%20I%20would%20like%20some%20Assistance.";
        }}
       />
       <FaFacebook
        style={{alignSelf: "center", width: "30px", height: "30px", color: "blue"}}
       />
        </p>
       </p>
      
       
      <p className="text-center text-xs text-red-500 mt-1">
        Made by{" "}
        <img
          height={"70"}
          width={"60"}
          src={favicon}
          onClick={() => {
            window.location.href = "https://webmuba.co.zw/";
          }}
          className="inline cursor-pointer"
        />
      </p>
    </footer>
  );
}
