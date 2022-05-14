import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jorge-henrique1/" target="_blank"> <BsLinkedin /> </a>
      <a href="https://github.com/Melguis" target="_blank"> <FaGithub /> </a>
    </div>
  )
}
