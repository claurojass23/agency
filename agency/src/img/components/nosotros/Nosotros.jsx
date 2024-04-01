import React from 'react'
import './nosotros.css'
import chicas from '../../img/ceo.png'

export default function Nosotros() {
  return (
    <>
    <body>
    <div className='divNosotros'>
      <div className='letrasNosotros'>
        <h1>QUIENES SOMOS</h1>
        <p>Bienvenidas a Golgen Gush, tu socio en el camino hacia la libertad financiera y el empoderamiento personal</p>
        <p>Con una experiencia combinada con más de tres años en la industria, hemos estado dedicados a brindar apoyo, orientación y oportunidades a mujeres de todas partes. Durante este tiempo, hemos visto a muchas mujeres transformar sus vidas, logrando independencia financiera y alcanzando sus sueños gracias a nuestro modelo de negocio flexible.</p>
        <p>En Golgen Gush Agency, nuestra misión es simple pero poderosa: ayudar a las mujeres a alcanzar sus metas financieras y personales, ofreciendo oportunidades de trabajo flexibles desde casa sin necesidad de inversión inicial.</p>
      </div>
    
      <div>
      
      <a href="https://www.instagram.com/goldengushagency/">
        <img src={chicas} className='imgNosotros' alt="Chicas en Instagram" />
      </a>
        
      </div>
    </div>
      
    </body>
    </>
  )
}
