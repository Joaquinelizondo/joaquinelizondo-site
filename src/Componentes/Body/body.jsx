import React, { useEffect, useRef } from 'react';
import './index.css';
import profileImage from '../../assets/profile1.png';
import { 
  SiPython, SiPlotly, SiPandas, SiNumpy, SiApachespark, 
  SiDatabricks, SiTableau, SiReact, SiPostgresql 
} from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';

// Custom Hook for Intersection Observer
const useIntersectionFadeIn = (refs) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);
};

const Body = () => {
  const aboutTitleRef = useRef(null);
  const aboutContentRef = useRef(null);

  useIntersectionFadeIn([aboutTitleRef, aboutContentRef]);

  return (
    <section className="body">
      {/* Profile Image */}
      <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>

      {/* Title Section */}
      <div className="title" ref={aboutTitleRef}>
        <h1>About Me</h1>
      </div>

      {/* About Content */}
      <div className="body1">
        <div className="content-box" ref={aboutContentRef}>
          <p>
            I am passionate about transforming data into innovative solutions.
            With more than 5 years of experience and a solid foundation in
            statistics, machine learning, and artificial intelligence, I
            specialize in solving complex problems and delivering value through
            data-driven insights.
          </p>
          <p>My expertise lies in:</p>
          <ul>
            <li>Building predictive models</li>
            <li>Conducting advanced data analysis</li>
            <li>Designing strategies based on actionable insights</li>
          </ul>
          <p>
            By combining analytical rigor with modern technological tools, I
            tackle challenges from a multidisciplinary perspective. I also enjoy
            staying at the forefront of technology, constantly exploring how to
            optimize workflows, enhance analyses, and deliver innovative
            solutions.
          </p>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="tech-icons">
        <h2 className="tech-title">Technologies I Use</h2>
        <div className="icons-container">
          <SiPython title="Python" />
          <SiPandas title="Pandas" />
          <SiNumpy title="NumPy" />
          <SiPlotly title="Plotly" />
          <SiApachespark title="PySpark" />
          <SiPostgresql title="PostgreSQL" />
          <SiDatabricks title="Databricks" />
          <SiTableau title="Tableau" />
          <SiReact title="React" />
          <FaFileExcel title="Excel" />
        </div>
      </div>
    </section>
  );
};

export default Body;
