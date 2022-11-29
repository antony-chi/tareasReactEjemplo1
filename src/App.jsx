import Header from "./components/Header"
import Tareas from "./components/Tareas"
import { useState } from "react"


function App() {

  const [tareas, setTareas] = useState([
    {
        id: 1,
        texto: 'Ir al cine',
        fecha: '29 de noviembre de 2022',
        terminada: true
    },
    {
        id: 2,
        texto: 'Ir por los taquitos al pastor',
        fecha: '31 de noviembre de 2022',
        terminada: true
    },
    {
        id: 3,
        texto: 'Ir al super',
        fecha: '01 de noviembre de 2022',
        terminada: true
    }

])

  return (
    <div className="container">
      <Header titulo="Tareas" />
      <Tareas tareas = {tareas}/>
    </div>
  )
}

export default App
