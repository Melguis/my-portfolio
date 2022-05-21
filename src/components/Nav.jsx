import React from 'react'
import {useState} from 'react'

import '../styles/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineBook} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'


export default function Nav() {

  const [ activeNav, setActiveNav ] = useState('#')

  const changeBackground = () => {
    if(window.scrollY < 900) {
      setActiveNav('#')
    } else if (window.scrollY >= 900 && window.scrollY <= 1799) {
      setActiveNav('#about')
    } else if (window.scrollY >= 1800 && window.scrollY <= 2699) {
      setActiveNav('#skills')
    } else if (window.scrollY >= 2700 && window.scrollY <= 3699) {
      setActiveNav('#portfolio')
    } else if (window.scrollY >= 3700) {
      setActiveNav('#contact')
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /> </a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <BiBook /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <AiOutlineBook /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /> </a>
    </nav>
  )
}
