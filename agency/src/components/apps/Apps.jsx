import React, { useState } from 'react';
import './apps.css';
import glow from '../../img/glow.png';
import livchat from '../../img/livchat.png';
import tigo from '../../img/tigo.png';
import mako from '../../img/mako.png';
import imagen1 from '../../img/docglow1.png';
import imagen2 from '../../img/docglow2.png';
import doclivchat1 from '../../img/doclivchat1.png';
import doclivchat2 from '../../img/doclivchat2.png';
import doctigo from '../../img/doctigo.png';
import docmako from '../../img/docmako.png';

export default function Apps() {
  const [mostrarModalGlow, setMostrarModalGlow] = useState(false);
  const [mostrarModalLivchat, setMostrarModalLivchat] = useState(false);
  const [mostrarModalTigo, setMostrarModalTigo] = useState(false);
  const [mostrarModalMako, setMostrarModalMako] = useState(false);

  const toggleModalGlow = () => {
    setMostrarModalGlow(!mostrarModalGlow);
  };

  const toggleModalLivchat = () => {
    setMostrarModalLivchat(!mostrarModalLivchat);
  };

  const toggleModalTigo = () => {
    setMostrarModalTigo(!mostrarModalTigo);
  };

  const toggleModalMako = () => {
    setMostrarModalMako(!mostrarModalMako);
  };

  return (
    <>
      <div className='apps'>
        <h1 className='tituloApps'>APLICACIONES DISPONIBLES</h1>
        <p className='parrafoApps'>Descubre formas flexibles de ganar dinero con estas aplicaciones, permitiéndote equilibrar tus responsabilidades personales y profesionales</p>
      </div>

      <div className='contenedorAppPrincipal'>
        <div className="appsDiv" onClick={toggleModalGlow}>
          <div className='letasApps'>
            <h2>GLOW</h2>
            <p>APP PAGOMANUAL</p>
          </div>
          <img src={glow} className='imgApps' />
          {mostrarModalGlow && (
            <div className="modal" style={{ display: 'block' }}>
              <div className="modal-content" style={{ backgroundColor: '#fefefe', margin: '10% auto', padding: '20px', border: '1px solid #888', width: '80%', maxWidth: '600px', position: 'relative' }}>
                <span className="close" onClick={toggleModalGlow} style={{ color: '#aaa', float: 'right', fontSize: '28px', fontWeight: 'bold' }}>&times;</span>
                <img src={imagen1} alt="Imagen 1" />
                <img src={imagen2} alt="Imagen 2" />
              </div>
            </div>
          )}
        </div>

        <div className="appsDiv" onClick={toggleModalLivchat}>
          <div className='letasApps'>
            <h2>LIVCHAT</h2>
            <p>APP PAGOMANUAL</p>
          </div>
          <img src={livchat} className='imgApps' />
          {mostrarModalLivchat && (
            <div className="modal" style={{ display: 'block' }}>
              <div className="modal-content" style={{ backgroundColor: '#fefefe', margin: '10% auto', padding: '20px', border: '1px solid #888', width: '80%', maxWidth: '600px', position: 'relative' }}>
                <span className="close" onClick={toggleModalLivchat} style={{ color: '#aaa', float: 'right', fontSize: '28px', fontWeight: 'bold' }}>&times;</span>
                <img src={doclivchat1} alt="Imagen 1" />
                <img src={doclivchat2} alt="Imagen 2" />
              </div>
            </div>
          )}
        </div>

       
         <div className="appsDiv" onClick={toggleModalTigo}>
          <div className='letasApps'>
            <h2>TIGO</h2>
            <p>APP AUTORETIRO</p>
          </div>
          <img src={tigo} className='imgApps' />
          {mostrarModalTigo && (
            <div className="modal" style={{ display: 'block' }}>
              <div className="modal-content" style={{ backgroundColor: '#fefefe', margin: '10% auto', padding: '20px', border: '1px solid #888', width: '80%', maxWidth: '600px', position: 'relative' }}>
                <span className="close" onClick={toggleModalTigo} style={{ color: '#aaa', float: 'right', fontSize: '28px', fontWeight: 'bold' }}>&times;</span>
                <img src={doctigo} alt="Imagen 1" />
              </div>
            </div>
          )}
          </div>

         <div className="appsDiv" onClick={toggleModalMako}>
          <div className='letasApps'>
            <h2>MAKO</h2>
            <p>APP AUTORETIRO</p>
          </div>
          <img src={mako} className='imgApps' />
          {mostrarModalMako && (
            <div className="modal" style={{ display: 'block' }}>
              <div className="modal-content" style={{ backgroundColor: '#fefefe', margin: '10% auto', padding: '20px', border: '1px solid #888', width: '80%', maxWidth: '600px', position: 'relative' }}>
                <span className="close" onClick={toggleModalMako} style={{ color: '#aaa', float: 'right', fontSize: '28px', fontWeight: 'bold' }}>&times;</span>
                <img src={docmako} alt="Imagen 1" />
              </div>
            </div>
          )}
         </div>
       

      </div>
    </>
  );
}
