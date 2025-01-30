import React from 'react';
import './index.css';

const Foot = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>
            Transforming data into actionable insights. Passionate about Machine
            Learning, Data Science, and building innovative solutions.
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/joaquin-elizondo-b155083a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/joaquinelizondo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://instagram.com/joaquinelizondo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: juacaelizondo@gmail.com</p>
          <p>Phone: +598 99 213 300</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Joaquin Elizondo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Foot;