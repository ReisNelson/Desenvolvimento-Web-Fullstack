import {useState} from "react"

function Contador(){
  const [contador, setContador] = useState (0)
  return(
    <>
    <h1>Contador</h1>
    <div>
      <p>Valor Atual: {contador}</p>
      <button onClick={()=> setContador(contador + 1)}>Incrementar</button>
    </div>
    </>
  )  
}

function inputNome(){
  const [nome, setNome] = useState ('')
  return(
    <div>
      <input 
      type="text" 
      value={nome} 
      onChange={e => setNome(e.target.value)} 
      />
      <p>Olá, {nome}</p>
    </div>
  )
}

// export default Contador
export default inputNome