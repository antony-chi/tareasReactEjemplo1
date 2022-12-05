import Button from "./Button"

const Header = ({ titulo, onAdd, mostrarForm }) => {

  /* 
  const saludo = () =>{
    console.log('click')
  }
*/

  return (
    <header className="header">
      <h1>{titulo}</h1>
      <Button texto={mostrarForm ? 'Ocultar' : 'Mostrar'} color = {mostrarForm ? 'red' : 'green'} onClick={onAdd} />
    </header>
  )
}

export default Header