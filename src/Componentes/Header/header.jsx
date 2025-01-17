import React, { useState, useEffect } from 'react';
import './index.css';

const Header = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const fullTitle = 'I am Joaquin Elizondo';
  const fullSubtitle = 'Data Scientist / Machine Learning Engineer';

  useEffect(() => {
    let titleIndex = 0;
    let subtitleIndex = 0;

    const typeText = () => {
      if (titleIndex < fullTitle.length) {
        setTitle(fullTitle.slice(0, titleIndex + 1)); // Añade una letra a la vez
        titleIndex++;
        setTimeout(typeText, 100); // Controla la velocidad de escritura
      } else if (subtitleIndex < fullSubtitle.length) {
        setSubtitle(fullSubtitle.slice(0, subtitleIndex + 1)); // Añade una letra a la vez
        subtitleIndex++;
        setTimeout(typeText, 100);
      }
    };

    typeText();
  }, []);

  return (
    <div className="header">
      <div className="header-container">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Header;
