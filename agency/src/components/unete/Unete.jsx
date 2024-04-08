import React from 'react'
import './unete.css'
import { CiCircleCheck } from "react-icons/ci";
import chicas from '../../img/sinfondo.png'
import Button from 'react-bootstrap/Button';

export default function Unete() {
  return (
    <>
    <div className='conteinerUnete'>
     <div className='streamer'>
       <div>
           <h2 className='titulosUnete'>¿QUE ES UNA STREAMER?</h2>
           <p>Se define cómo streamer a la persona que reliza una transmisión en directo desde cualquiera de las plataformas de live-streaming: Livchat,Glow,ect.</p>
           <p>Son aplicaciones donde realizas llamadas 1 a 1 con personas de diferentes país,el objetivo es obtener la mayor cantidad de moneda posibles para llegar a cobro</p>
       </div>
       <div>
           <h2 className='titulosUnete'>¿SER UNA STREAMER ES UN TRABAJO?</h2>
           <p>Es un trabajo, se necesita ser muy determinada y constante para lograr resultados,algunas de las ventajas son:</p>
           <ul>
             <p><CiCircleCheck  className='iconUnete'/>Puedes trabajar desde casa por medio de tu celular.</p>
             <p><CiCircleCheck className='iconUnete' />Tu misma eliges tu horario a conveniencia.</p>
             <p><CiCircleCheck className='iconUnete' />Eres libre de decidir el tipo de contenido que quieres generar.</p>
           </ul>
      </div>
      </div>
      <div className='uneteDivButton'>
        <img className='imagenUnete' src={chicas}></img>
        <Button className='buttonUnete' variant="danger" href='https://api.whatsapp.com/message/XFBRCAJUCJOBF1?autoload=1&app_absent=0' target="_blank">EMPIEZA AQUI</Button>
      </div>
    </div>
    </>
  )
}
