import React, { useState } from 'react';
import './TabsContainer.css'; // Ensure you have this CSS file in your project

const TabsContainer = ({ tabs, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs-container" style={{ backgroundImage: `url(${images[activeIndex]})` }}>
      <div className="tabs-toggle">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`toggle-btn ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsContainer;
