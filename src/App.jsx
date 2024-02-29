
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting='Productos Disponibles'/>
      </div>
    
    </>
  )
}

export default App
