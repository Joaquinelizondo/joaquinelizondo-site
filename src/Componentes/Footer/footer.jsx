import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // Estilos de AOS
import AOS from 'aos';
import './index.css';

const Footer = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      offset: 200, // Desplazamiento antes de activar la animación
      once: true, // La animación se ejecutará solo una vez
    });
  }, []);

  const projects = [
    {
      title: 'Computer Vision',
      description: 'Exploring advanced computer vision techniques.',
      details: {
        name: 'Computer Vision',
        technology: 'Python, TensorFlow, OpenCV',
        objectives: 'Develop models for image detection and classification in retail products.',
      },
    },
    {
      title: 'Product Association Rules',
      description: 'Analyzing large datasets to gain insights into customer consumption patterns.',
      details: {
        name: 'Product Association Rules',
        technology: 'Python, Pandas, Matplotlib',
        objectives: 'Analyze data to make strategic decisions about products offered to customers.',
      },
    },
    {
      title: 'Customer Segmentation',
      description: 'Classification of customer segments based on customer profiles.',
      details: {
        name: 'Customer Segmentation Project',
        technology: 'Python, Pandas, Matplotlib, Numpy',
        objectives: 'Classify customers into clusters based on purchasing behavior.',
      },
    },
    {
      title: 'Employee Allocation to Stores Project',
      description: 'Recommendation of staff allocations for retail stores.',
      details: {
        name: 'Employee Allocation to Stores Project',
        technology: 'Python, Pandas, Matplotlib, Numpy, Databricks, PySpark, PostgreSQL, Azure',
        objectives: 'Determine optimal staff allocation to retail stores based on sales needs.',
      },
    },
  ];

  const handleViewMore = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <div className="footer-container">
      <h1 data-aos="fade-up">Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-slide"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={() => handleViewMore(project)}>Ver más</button>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{activeProject.details.name}</h2>
            <p><strong>Technology:</strong> {activeProject.details.technology}</p>
            <p><strong>Objectives:</strong> {activeProject.details.objectives}</p>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
