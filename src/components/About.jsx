import React from 'react';
import '../styles/about-style.css';
import AboutImage400 from '../assets/about-image-400.jpg';
import AboutImage250 from '../assets/about-image-250.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="about__image-container">
        <img
          className="about__image"
          src={AboutImage250}
          srcSet={`${AboutImage400} 400w,
      ${AboutImage250} 250w`}
          sizes="30vw"
          alt="about image"
        />
        <div className="about__image about__image_background"></div>
      </div>
      <div className="about__text">
        <h1>About Me</h1>
        <h3>Milohill</h3>
        <p>
          I am a passionate and self-motivated full-stack developer, constantly
          on a journey of learning and growth. My insatiable curiosity and love
          for all things tech have driven me to explore the vast world of
          software development, mastering both front-end and back-end
          technologies.
          <br />
          <br />
          From the very beginning of my self-learning journey, I have been
          captivated by the art of coding. The ability to create something from
          scratch, turning lines of code into functional and visually appealing
          applications, gives me an unparalleled sense of fulfillment.
        </p>
      </div>
    </div>
  );
}
