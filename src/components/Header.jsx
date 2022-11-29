import Button from "./Button"

const Header = (titulo) => {

  const saludo = () =>{
    console.log('click')
  }

  return (
    <header className="header">
      <h1>titulo</h1>
      <Button texto='Agregar' color = 'green' param={saludo} />
      <Button texto='Borrar' color = 'red' param={saludo} />
    </header>
  )
}

export default Header