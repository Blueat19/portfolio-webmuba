import React from 'react';
import vidz from "../video/1.mp4"

export default function Webmuba() {

  return (
    <div 
    className="py-6 md:order-1 hidden md:block relative w-full flex justify-center"
    style={{backgroundColor:"#F7F7F7"}}
    >
     <h1
      style={{color:"rgb(8,58,149)",textAlign:"center",fontSize:"30px"}}
     >Scott's CyberWorld</h1>  
    <video
      src={vidz}
      style={{ width: "80%" ,borderRadius:"10px"}}
      controls
      />
        
    </div>
  );
}