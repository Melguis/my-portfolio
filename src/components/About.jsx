import React from 'react'
import '../styles/about.css'
// import ME from '../assets/me-about.jpg'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>Conheça um pouco</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Estudante</h5>
              <small>Estudando programação a 2 anos</small>
            </article>
          </div>

          <p>
            • Tenho 21 anos e tenho conhecimento em desenvolvimento front-end; <br /> <br />
            • Aprendendo HTML, CSS, JavaScript; <br /> <br />
            • Frameworks e bibliotecas como ReactJS, React Native e Angular; <br /> <br />
            • Conhecimento de em Node.JS; <br /> <br />
            • Inglês intermediário; <br /> <br />
            • Em busca de novas experiências e dominar mais tecnologias; <br /> <br />
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}