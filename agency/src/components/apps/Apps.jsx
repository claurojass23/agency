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
      <div>
      <img src={glow}></img>
      <img src={livchat}></img>
      </div>
      <div>
      <img src={tigo}></img>
      <img src={mako}></img>
      </div>
    </div>
    
    </>
  )
}
