import{Routes,Route,} from 'react-router-dom'

import './App.css'
import Unete from './components/unete/Unete'
import Nosotros from './components/nosotros/Nosotros'
import Beneficios from './components/beneficios/Beneficios'
import Apps from './components/apps/Apps'
import Inicio from './components/inicio/Inicio'
import Navegador from './routes/Navegador'

function App() {
  return (
    <>
       <Navegador/>
       <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Unete' element={<Unete/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/Beneficios' element={<Beneficios/>}/>
       <Route path='/Apps' element={<Apps/>}/>


      </Routes>
    </>
  );
}

export default App;
