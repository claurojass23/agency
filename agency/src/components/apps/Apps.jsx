import React from 'react'
import './apps.css'
import glow from '../../img/glow.png'
import livchat from '../../img/livchat.png'
import tigo from '../../img/tigo.png'
import mako from '../../img/mako.png'



export default function Apps() {
  return (
    <>
    <div className='apps'>
    <h1>APLICACIONES DISPONIBLES</h1>
    <p>Descubre formas flexibles de ganar dinero con estas aplicaciones, permitiéndote equilibrar tus responsabilidades personales y profesionales</p>
    </div>
    <div>
      

      <div className="appsDiv">
        <div>
          <h2>GlOW</h2>
          <p></p>
        </div>
      <img src={glow}></img>
      </div>
      <div className="appsDiv">
      <div>
          <h2>LIVCHAT</h2>
          <p></p>
        </div>
      <img src={livchat}></img>
      </div>
      <div className="appsDiv">
      <div>
          <h2>TIGO</h2>
          <h6>FUNCIÓN DE LA APP</h6>
          <ul>
          <li>Aplicación de videollamadas 1x1: machts y privados.</li>
          <li>Obtienes ganancias por:  matchs monetizadas, minuto de privados, regalos y mensajes.</li>
          <li></li>
          </ul>
        </div>
      <img src={tigo}></img>
      </div>
      <div className="appsDiv">
      <div>
          <h2>MAKO</h2>
          <p></p>
        </div>
      <img src={mako}></img>
      </div>
    </div>
    
    </>
  )
}
