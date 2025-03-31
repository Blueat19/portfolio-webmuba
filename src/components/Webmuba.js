import React from 'react';
import vidz from "../video/1.mp4"

export default function Webmuba() {

  return (
    <div className="py-6 md:order-1 hidden md:block relative w-full flex justify-center">
     <h1>Welcome to Scott's CyberWorld</h1>  
    <video
      src={vidz}
      style={{ width: "100%" }}
      controls
      />
        
    </div>
  );
}