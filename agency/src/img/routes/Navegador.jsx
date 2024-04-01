import { NavLink } from 'react-router-dom'
import './navegador.css'
import img from '../img/logo.png'

export default function Navegador() {
  return (
    <>
    <nav className='navegador'>
        <div className='conteiner'>
            <div className='subContenedor'> 
            <img src={img} className='imagLogo'></img>
           </div>
            <ul className='Navmenu'>
              <li className='NavItem'><NavLink className='NavLink' to="/">Inicio</NavLink></li>
              <li className='NavItem'><NavLink className='NavLink' to="/Unete">¡NO TE PIERDAS! ÚNETE YA</NavLink></li>
              <li className='NavItem'><NavLink  className='NavLink' to="/Nosotros">Nosotros</NavLink></li>
              <li className='NavItem'><NavLink className='NavLink' to="/Beneficios">Beneficios</NavLink></li>
              <li className='NavItem'><NavLink className='NavLink' to="/Apps">Apps</NavLink></li>
            </ul>
        </div>
     </nav>
    </>
  )
}