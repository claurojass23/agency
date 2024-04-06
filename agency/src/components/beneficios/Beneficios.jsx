import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import './beneficios.css'
import claudia from '../../img/claudia.png'

export default function Beneficios() {
  return (
    <>
      <div className='conteinerBeneficios'>
       <div className='beneficios'>
       <div>
        <h3 className='titulosBeneficios'>NUESTROS BENEFICIOS</h3>
        <ul>
             <p><CiCircleCheck  className='iconUnete'/>Obtienes independencia laboral, cómo streamer puedes establecer tu propio horario de trabajo y tener cierta flexibilidad y cómo gestionar tu contenido.</p>
             <p><CiCircleCheck className='iconUnete' />Flexibilidad geografía, siempre y cuando tengas privacidad y conexión a internet estable, puedes trabajar desde cualquier lugar o país, lo que te brinda la oportunidad de hacerlo mientras te mudas o viajas.</p>
             <p><CiCircleCheck className='iconUnete' />Ganancias completamente en dólares. </p>
        </ul>
        </div>
        <div>
          <h3 className='titulosBeneficios'>REQUISITOS</h3>
          <ul>
             <p><CiCircleCheck  className='iconUnete'/>Ser mujer de 18 a 45 años.</p>
             <p><CiCircleCheck className='iconUnete' />Telélefono con cámara frontal en buen estado.</p>
             <p><CiCircleCheck className='iconUnete' />Red wifi estable.</p>
             <p><CiCircleCheck className='iconUnete' />Cuenta bancaria física o digital/Propia o de un tercero.</p>
        </ul>
        </div>
       </div>

       
      </div>
    </>
  )
}
