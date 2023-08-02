import React from 'react';
import '../styles/project-style.css';
import ProjectImageOne300 from '../assets/project-image-1-300.jpg';
import ProjectImageOne700 from '../assets/project-image-1-700.jpg';
import ProjectImageTwo300 from '../assets/project-image-2-300.jpg';
import ProjectImageTwo700 from '../assets/project-image-2-700.jpg';

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="projects__project-container">
          <div className="projects__project-image-container">
            <img
              className="projects__project-image"
              src={ProjectImageOne300}
              alt="project image one"
              srcSet={`${ProjectImageOne300} 300w, ${ProjectImageOne700} 700w`}
              sizes="50vw"
            />
            <div className="projects__project-image projects__project-image_background"></div>
          </div>
          <div className="projects__project-text">
            <h3 className="projects__project-name">
              Random Password Generator
            </h3>
            <p className="projects__project-description">
              In this project, I developed a personal finance tracker app to
              help users manage their finances effectively. The app allows users
              to input income, expenses, and savings data, and then it generates
              visualizations and reports to give users a comprehensive overview
              of their financial health.
            </p>
          </div>
        </div>
        <div className="projects__project-container">
          <div className="projects__project-text">
            <h3 className="projects__project-name">
              Immersive Rollercoaster Simulation
            </h3>
            <p className="projects__project-description">
              Welcome to the world of adrenaline-pumping excitement and
              breathtaking thrills!
              <br />
              The Immersive Rollercoaster Simulation project is an ambitious
              endeavor that brings the ultimate rollercoaster experience to
              life, transcending reality and immersing users in a virtual realm
              of heart-pounding adventure.
            </p>
          </div>
          <div className="projects__project-image-container">
            <img
              className="projects__project-image"
              src={ProjectImageTwo300}
              alt="project image one"
              srcSet={`${ProjectImageTwo300} 300w, ${ProjectImageTwo700} 700w`}
              sizes="50vw"
            />
            <div className="projects__project-image projects__project-image_background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
