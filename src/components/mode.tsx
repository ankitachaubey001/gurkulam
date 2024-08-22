import React, { useState } from 'react';

const  Mode =()=> {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      
    </div>
  );
}

export default Mode;
