import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AddTarea from "./components/AddTarea"

import { useState } from "react"


function App() {

  const [mostrarForm, setMonstrarForm] = useState(false)

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

//funcion de borrar una tarea
const borrarTarea = (id) => {
  setTareas(tareas.filter((elemento) =>elemento.id !== id))
}
//cambiamos el status de la tarea
const marcarTarea = (id) => {
  setTareas(tareas.map((elemento) => elemento.id === id ? { ...elemento, terminada : !elemento.terminada } : elemento ))
}

//agregar una tarea del componente AddTarea
const agregarTarea = (tarea) => {
  //console.log(tarea)
  const id = Math.floor(Math.random() *10000) +1
  //nueva tarea  es igual al id generado mas una copia de lo que recibe tarea
  const nuevaTarea = {id, ...tarea}
  //creamos la tarea 
  setTareas([...tareas, nuevaTarea])

}



//usamos operador ternario para saber si el array de tareas tiene elemento, si no mostrar NO HAY TAREAS

  return (
    <div className="container">
      <Header titulo="Tareas" mostrarForm={mostrarForm} onAdd={() => setMonstrarForm(!mostrarForm)} />
      {mostrarForm && <AddTarea onAdd={agregarTarea} />}
      {tareas.length > 0 ? <Tareas tareas = {tareas} onDelete={borrarTarea} onToggle={marcarTarea} /> : 'No hay tareas que mostrar'} 
    </div>
  )
}

export default App
