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

    <div className='contenedorAppPrincipal'>
      
         <div className="appsDiv">
            <div className='letasApps'>
               <h2>GlOW</h2>
               <p>APP PAGOMANUAL</p>
           </div>
           <img src={glow} className='imgApps'></img>
         </div>
         <div className="appsDiv">
            <div className='letasApps'>
               <h2>LIVCHAT</h2>
               <p>APP PAGOMANUAL</p>
            </div>
           <img src={livchat} className='imgApps'></img>
         </div>
         <div className="appsDiv">
            <div className='letasApps'>
               <h2>TIGO</h2>
               <p>APP AUTORETIRO</p>
           </div>
           <img src={tigo} className='imgApps'></img>
         </div>
          <div className="appsDiv" >
             <div className='letasApps'>
               <h2>MAKO</h2>
               <p>APP AUTORETIRO</p>
             </div>
           <img src={mako} className='imgApps'></img> 
         </div>

      
         
      
    </div>
    
    </>
  )
}
