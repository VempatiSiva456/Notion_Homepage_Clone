import React from 'react';
import './Tab.css';

const Tab = ({ isActive, label, onClick }) => {
  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
