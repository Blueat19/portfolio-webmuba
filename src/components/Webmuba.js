import React, { useState, useEffect } from 'react';
import webmubainfo from "../assets/webmubainfo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Webmuba() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [ webmubainfo];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="py-6 md:order-1 hidden md:block relative w-full flex justify-center">
      <AnimatePresence wait>
        <motion.img
          key={activeIndex}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1.5 }}
          src={images[activeIndex]}
          alt="Carousel Image"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </AnimatePresence>
    </div>
  );
}