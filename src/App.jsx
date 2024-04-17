
import './App.css'
import Contacto from './components/contacto/Contacto';
import SobreMi from './components/sobremi/SobreMi';
import Talleres from './components/talleres/Talleres'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer greeting='Productos Disponibles'/>}/>
              <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route exact path='/item/:itemId' element={<ItemDetailContainer/>} />
              <Route exact path='/cart' element={<Cart/>} />
              <Route exact path='/checkout' element={<Checkout/>} />

              <Route exact path='/talleres' element={<Talleres/>}/>
              <Route exact path='/contacto' element={<Contacto/>}/>
              <Route exact path='/sobremi' element={<SobreMi/>}/>
            </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>      
    </>
  )
}

export default App
