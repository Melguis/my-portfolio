import React from 'react'
import '../styles/footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>JORGE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jorge-henrique1/"> <BsLinkedin /> </a>
        <a href="https://github.com/Melguis"> <FaGithub /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JORGE. All rights reserved.</small>
      </div>
    </footer>
  )
}
