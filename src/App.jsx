
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Talleres from './components/talleres/Talleres';
import Contacto from './components/contacto/Contacto';
import SobreMi from './components/sobremi/SobreMi';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>

        <Routes>
                  {/* productos */}
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:categoryId' element={<ItemCategoryContainer/>}/>
          <Route exact path='/item/:itemId' element={<ItemDetailContainer/>} />

          <Route exact path='/talleres' element={<Talleres/>}/>
          <Route exact path='/contacto' element={<Contacto/>}/>
          <Route exact path='/sobremi' element={<SobreMi/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
