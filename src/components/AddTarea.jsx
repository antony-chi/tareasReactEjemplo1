import React, {useState} from 'react'

const AddTarea = ({ onAdd }) => {

    const [texto, setTexto] = useState('')
    const [fecha, setFecha] = useState('')
    const [terminada, setTerminada] = useState(false)

    const onSubmit = (e) =>{
        //cachamos el evento "e" y usamos el preventDefault para que no recargue la pagina
        e.preventDefault()

        //si el state texto esta vacion
        if(!texto){
            alert('Debes insertar una descripcion')
            return
        }

        //si el state fecha esta vacion
        if(!fecha){
            alert('Debes insertar una fecha')
            return
        }

        //si no hay error ejecutamos la funcion de crear el objeto con los datos del formulario
        onAdd({ texto, fecha, terminada})

        //para limpiar los campos al guradar 
        setTexto('')
        setFecha('')
        setTerminada(false)

    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Tarea:</label>
            <input 
                type="text"
                placeholder='Teclea una descripción'
                value={texto}
                onChange={(e) =>setTexto(e.target.value)}
                 />
        </div>
        <div className='form-control'>
            <label>Fecha:</label>
            <input 
                type="text"
                placeholder='Teclea una fecha' 
                value={fecha}
                onChange={(e) =>setFecha(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Terminada:</label>
            <input 
                type="checkbox"
                checked={terminada}
                value={terminada}
                onChange={(e) => setTerminada(e.currentTarget.checked)}
             />
        </div>
        <input type="submit" value="Guardar" className='btn btn-block' />
    </form>
  )
}

export default AddTarea