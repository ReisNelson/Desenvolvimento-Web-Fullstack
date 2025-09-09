import { useState } from "react"

// function Saudacao({nome}){
//   return(
//     <h2>Olá, {nome}</h2>
//   )
// }

// function App(){
//   const[usuario, setUsuario] = useState('Maria')
//   return(
//     <Saudacao nome={usuario}/>
//   )
// }

// export default App

const usuarios = [
  {id:1, nome: 'Maria'},
  {id:2, nome: 'Jõao'},
  {id:1, nome: 'Chico'},
  {id:2, nome: 'Victor'},
  {id:1, nome: 'Jorge'},
  {id:2, nome: 'Mateus  '},
]

function Usuario({nome}){
  return(
    <li>{nome}</li>
  )
}
function ListaUsuarios(){
  return(
    <ul>
      {usuarios.map(u => <Usuario key={u.id} nome={u.nome}/>)}
    </ul>
  )
}
export default ListaUsuarios