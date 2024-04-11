import { NavLink } from 'react-router-dom'
import './navegador.css'
import img from '../img/logo.png'
import { FaFacebookSquare,FaInstagram,FaTiktok,FaWhatsapp } from "react-icons/fa";
import { HiViewList } from 'react-icons/hi';
import { useState } from 'react';


export default function Navegador() {
  
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };

  
  
  return (
    <>
    <nav className='navegador'>
        <div className='conteiner'>
            <div className='subContenedor'> 
            <a href='/'><img src={img} className='imagLogo'></img></a>
           </div>
            <ul className='Navmenu'>
              <li className='NavItem'><NavLink className='NavLink' to="/">Inicio</NavLink></li>
              <li className='NavItem'><NavLink className='NavLink' to="/Unete">¡NO TE PIERDAS! ÚNETE YA</NavLink></li>
              <li className='NavItem'><NavLink  className='NavLink' to="/Nosotros">Nosotros</NavLink></li>
              <li className='NavItem'><NavLink className='NavLink' to="/Beneficios">Beneficios</NavLink></li>
              <li className='NavItem'><NavLink className='NavLink' to="/Apps">Apps</NavLink></li>
            </ul>
            <div>
          <div className='ulIcons'>
          <a href='https://www.facebook.com/profile.php?id=61553020993486' target="_blank"><FaFacebookSquare className='iconNav'/></a>
          <a href='https://www.instagram.com/goldengushagency/' target="_blank"><FaInstagram  className='iconNav'/></a>
          <a href='https://www.tiktok.com/@goldengushagency?lang=es' target="_blank"><FaTiktok  className='iconNav'/></a>
          <a href='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FXFBRCAJUCJOBF1&e=AT1KKt1NICrKQum5KFRQpOEXMfIGQsNr4Q77YAUBhdA3AFzkqHrcTQbbjfX9gaeFTp20V8m13EPPTQRRFF9hZ80i8ZHM9a7KO0iBHA' target="_blank"><FaWhatsapp className='iconNav' /></a>
          </div>
          <div class="menu-desplegable">
  <span class="menu-trigger" onClick={toggleMenu}><HiViewList className='iconoBarra'/></span>
  <ul class="ulIcono">
    <li className='NavItem'><NavLink className='NavLink' to="/">Inicio</NavLink></li>
    <li className='NavItem'><NavLink className='NavLink' to="/Unete">¡NO TE PIERDAS! ÚNETE YA</NavLink></li>
    <li className='NavItem'><NavLink  className='NavLink' to="/Nosotros">Nosotros</NavLink></li>
    <li className='NavItem'><NavLink className='NavLink' to="/Beneficios">Beneficios</NavLink></li>
    <li className='NavItem'><NavLink className='NavLink' to="/Apps">Apps</NavLink></li>
  </ul>
</div>
         

        </div>
        </div>
        
     </nav>
    </>
  )
}