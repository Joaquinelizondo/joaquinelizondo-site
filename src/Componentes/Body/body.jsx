import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { SiPython, SiPlotly, SiPandas, SiNumpy, SiApachespark, SiDatabricks,  SiTableau, SiReact, SiPostgresql, } from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';

const useIntersectionFadeIn = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('fade-in')) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref]);
};

const Body = () => {
  const aboutTitleRef = useRef(null);
  const aboutContentRef = useRef(null);
  const [image, setImage] = useState(null);

  useIntersectionFadeIn(aboutTitleRef);
  useIntersectionFadeIn(aboutContentRef);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (
    <section className="body">
      <div className="profile">
        {image ? (
          <img src={image} alt="Profile" className="profile-image" />
        ) : (
          <label htmlFor="imageUpload" className="image-upload-label">
            Upload Photo
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </label>
        )}
      </div>
      <div className="title" ref={aboutTitleRef}>
        <h1>About Me</h1>
      </div>
      <div className="body1">
        <div className="content-box" ref={aboutContentRef}>
          <p>
            I am passionate about transforming data into innovative solutions.
            With more than 5 years of experience and a solid foundation in
            statistics, machine learning, and artificial intelligence, I
            specialize in solving complex problems and delivering value through
            data-driven insights.
          </p>
          <p>
            My expertise lies in:
            <ul>
              <li>Building predictive models</li>
              <li>Conducting advanced data analysis</li>
              <li>Designing strategies based on actionable insights</li>
            </ul>
          </p>
          <p>
            By combining analytical rigor with modern technological tools, I
            tackle challenges from a multidisciplinary perspective. I also enjoy
            staying at the forefront of technology, constantly exploring how to
            optimize workflows, enhance analyses, and deliver innovative
            solutions.
          </p>
        </div>
      </div>
      <div className="tech-icons">
        <h2 className="tech-title">Technologies I Use</h2>
        <div className="icons-container">
          <SiPython title="Python" />
          <SiPandas title="Pandas" />
          <SiNumpy title="NumPy" />
          <SiPlotly title="Matplotlib" />
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
