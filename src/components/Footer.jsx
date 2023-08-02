import React from 'react';
import '../styles/footer-style.css';
import GithubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import TwitterIcon from '../assets/twitter.svg';

export default function Footer() {
  return (
    <footer>
      <form className="footer__form">
        <h1>Contact Me</h1>
        <input
          className="footer__form-email"
          name="email"
          type="text"
          placeholder="Your Email"
        />
        <textarea
          className="footer__form-message"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
      </form>
      <div className="footer__text-container">
        <p className="footer__description">
          I'm delighted that you've stopped by! Whether you have a question, a
          suggestion, or just want to say hello, I'd love to hear from you.
          <br />
          <br />
          Feel free to reach out through the contact form below, and I'll make
          sure to get back to you as soon as possible. Your feedback, ideas, and
          collaboration opportunities are always welcome. Let's connect and make
          something amazing together! Looking forward to hearing from you,
        </p>
        <div className="footer__icons">
          <a href="https://github.com/milohill">
            <img src={GithubIcon} alt="" width="24px" />
          </a>
          <a href="">
            <img src={LinkedInIcon} alt="" width="24px" />
          </a>
          <a href="">
            <img src={TwitterIcon} alt="" width="24px" />
          </a>
        </div>
      </div>
    </footer>
  );
}
