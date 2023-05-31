import React from 'react'
import '../styles/header.css';
import CTA from './CTA'
import ME from '../assets/eu.jpg'
import border from '../assets/border.svg'
import HeaderSocials from '../components/HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        
        <div className="me">
          <div className="circle">
            <img className="photo" src={ME} alt="me" />
            <img className="border" src={border} alt="borda" />
          </div>

          <div className="header__content">
            <h1>Olá, meu nome é </h1> 
            <h1 className="name">Jorge Henrique</h1>
            <h3 className="text-light">Front-end Developer</h3>
            <h4>Neste portfolio você irá conhecer um pouco sobre mim e minhas habilidades nessa área!</h4>
            <CTA />
          </div>
        </div>

        <HeaderSocials />

      </div>
    </header>
  )
}
