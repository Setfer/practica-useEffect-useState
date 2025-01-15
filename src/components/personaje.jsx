import React, { useEffect, useState } from 'react'

const Mostrarpersonajes = () => {
  
  const [personajes, setPersonajes]= useState([])
  const [girar, setGirar]= useState({})

  const rotar = (id) => {
    setGirar((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then((res) =>res.json())
    .then((res)=>{setPersonajes(res.results)}) 

  },[])
  return (
    
    <div>
      {personajes.map((personaje)=>(
        <div key = {personaje.id}>
        <img
            src={personaje.image}
            alt={personaje.name}
            onClick={() => rotar(personaje.id)}
            
            style={
              girar[personaje.id]
                ? { transform: "rotate(180deg)" }
                : {}
            }
          />
        <p>{personaje.name}</p>
        </div>
      ))}

    </div>
  )
}

export default Mostrarpersonajes
