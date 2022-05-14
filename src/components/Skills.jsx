import React from 'react'
import '../styles/skills.css';
import {BsPatchCheckFill} from 'react-icons/bs'

import imgHTML from '../assets/logo-html.svg'
import imgCSS from '../assets/logo-css.svg'
import imgJS from '../assets/logo-js.svg'
import imgRJ from '../assets/logo-react.svg'
import imgANG from '../assets/logo-angular.svg'
import imgNJ from '../assets/logo-nodejs.svg'

export default function Skills() {
  return (
    <section id='skills'>
      <h5>Algumas habilidades que possuo</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">

        <div className="skills__card">
          <img src={imgHTML} alt="Logo HTML" />
          <h2> <BsPatchCheckFill className='skills__details-icon'/>HTML</h2>
        </div>

        <div className="skills__card">
          <img src={imgCSS} alt="Logo CSS" />
          <h2> <BsPatchCheckFill className='skills__details-icon'/>CSS</h2>
        </div>

        <div className="skills__card">
          <img src={imgJS} alt="Logo JS" />
          <h2> <BsPatchCheckFill className='skills__details-icon'/>JavaScript</h2>
        </div>

        <div className="skills__card">
          <img src={imgRJ} alt="Logo React" />
          <h2> <BsPatchCheckFill className='skills__details-icon'/>React</h2>
        </div>

        <div className="skills__card">
          <img src={imgANG} alt="Logo CSS" />
          <h2> <BsPatchCheckFill className='skills__details-icon'/>Angular</h2>
        </div>

        <div className="skills__card">
          <img src={imgNJ} alt="Logo JS" />
          <h2> <BsPatchCheckFill className='skills__details-icon'/>NodeJS</h2>
        </div>
      </div>
    </section>
  )
}
