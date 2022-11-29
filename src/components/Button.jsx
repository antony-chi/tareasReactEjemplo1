
const Button = ({texto, color, param}) =>{

  return (
    <button onClick={param} style={{ backgroundColor: color}} className = "btn">{texto}</button>
  )
}

export default Button