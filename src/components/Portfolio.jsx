import React from 'react'
import '../styles/portfolio.css';

import portImg1 from '../assets/portfolio1.svg'
import portImg2 from '../assets/portfolio2.png'
import portImg3 from '../assets/portfolio3.png'
import portImg4 from '../assets/portfolio4.png'
import portImg5 from '../assets/portfolio5.png'
import portImg6 from '../assets/portfolio6.png'

const data = [
  {
    id: 1,
    title: 'dev.finance$ - Controle de finanças',
    github: 'https://github.com/Melguis/devfinances',
    demo: 'https://dribbble.com/shots/18013189-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    image: portImg1
  },
  {
    id: 2,
    title: 'moveit - Contador com exercícios',
    github: 'https://github.com/Melguis/moveit',
    demo: 'https://dribbble.com/shots/18013196-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    image: portImg2
  },
  {
    id: 3,
    title: 'Feedback - Botão para um enviar email',
    github: 'https://github.com/Melguis',
    demo: 'https://dribbble.com/shots/17992262-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    image: portImg3
  },
  {
    id: 4,
    title: 'Realtor - Pesquisa de imóveis',
    github: 'https://github.com/Melguis/realtor-jh',
    demo: 'https://dribbble.com/shots/17992247-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    image: portImg4
  },
  {
    id: 5,
    title: 'Website - Site de receitas com Bootstrap',
    github: 'https://github.com/Melguis/Bootstrap-project',
    demo: 'https://dribbble.com/shots/17845733-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    image: portImg5
  },
  {
    id: 6,
    title: 'Lista de presença - Armazenando estados em react',
    github: 'https://github.com/Melguis/Reactapp-rs',
    demo: 'https://dribbble.com/shots/17774094-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    image: portImg6
  },
]

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Meus últimos projetos</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
