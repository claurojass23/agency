import React from 'react'
import './nosotros.css'
import chicas from '../../img/negro.png'

export default function Nosotros() {
  return (
    <>
    
    <div className='divNosotros'>
      <div className='letrasNosotros'>
        <h1>QUIENES SOMOS</h1>
        <p>Bienvenidas a <a className='letrasGolden'>Golgen Gush</a>, tu socio en el camino hacia la libertad financiera y el empoderamiento personal</p>
        <p>Con una experiencia combinada con más de tres años en la industria, hemos estado dedicados a brindar apoyo, orientación y oportunidades a mujeres de todas partes. Durante este tiempo, hemos visto a muchas mujeres transformar sus vidas, logrando independencia financiera y alcanzando sus sueños gracias a nuestro modelo de negocio flexible.</p>
        <p>En <a className='letrasGolden'>Golgen Gush Agency</a>, nuestra misión es simple pero poderosa: ayudar a las mujeres a alcanzar sus metas financieras y personales, ofreciendo oportunidades de trabajo flexibles desde casa sin necesidad de inversión inicial.</p>
      </div>
    
    
      <div className='ceo'>
        <a href="https://www.instagram.com/danielabrs_/" target="_blank">
          <img src={chicas} className='imgNosotros' alt="Chicas en Instagram" />
        </a>
      </div>
    </div>
      
    
    </>
  )
}
