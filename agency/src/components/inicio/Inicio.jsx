import React from 'react'
import imagen from '../../img/gush.png'
import './inicio.css'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <>
    <div className='inicio1'>
    <Link to='/Inicio'><img src={imagen} className='imagenInicio'></img></Link>
    </div>
     
    </>
  )
}
