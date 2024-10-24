import React, { useState, useEffect } from 'react';

const Mode = ({ children }:any) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode: any) => !prevMode);
  };

  return (
    <div className="mode-toggle">
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
        <span className="slider round"></span>
      </label>
      {children}
    </div>
  );
};

export default Mode;
