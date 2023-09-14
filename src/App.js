import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const [contador, setContador] = useState(0)

  function sumaConEstado() {
    setContador(contador + 1)
  }

  return (
    <div>
      <NavBar>
      </NavBar>
      <br />
      <br />
      <div>

        <h1>Productos</h1>

        <button onClick={sumaConEstado}>BOTON CON ESTADO</button>
        <br /><div style={{ marginLeft: '30px' }}><strong>{contador}</strong></div>

        <ItemListContainer greeting='Te damos la bienvenida para que conozcas los productos' />

      </div>
    </div>
  );
}

export default App;
