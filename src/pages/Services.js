import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../css/Services.css";

const items = [
  {
    id: 1,
    title: "Page Title 1",
    subtitle: "Subtitle for Page 1",
    content: "This is the content of page 1",
  },
  {
    id: 2,
    title: "Page Title 2",
    subtitle: "Subtitle for Page 2",
    content: "This is the content of page 2",
  },
];

const Page = ({ item, setSelectedPageId }) => (
  <motion.div layoutId={item.id} onClick={() => setSelectedPageId(item.id)} className="page">
    <motion.h5>{item.subtitle}</motion.h5>
    <motion.h2>{item.title}</motion.h2>
    <p>{item.content}</p>  {/* Render additional content here */}
  </motion.div>
);

const CardList = () => {
  const [selectedPageId, setSelectedPageId] = useState(null);

  return (
    <div className="card-list">
      {items.map(item => (
        <Page key={item.id} item={item} setSelectedPageId={setSelectedPageId} />
      ))}

      <AnimatePresence>
        {selectedPageId && (
          <Page
            key={selectedPageId}
            item={items.find(item => item.id === selectedPageId)}
            setSelectedPageId={setSelectedPageId}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardList;

