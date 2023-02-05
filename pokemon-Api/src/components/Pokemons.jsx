import React, { useState } from 'react'

const Pokemons = () => {
    const [pokemon, setPokemon] = useState([])
    const buscarPokemon = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
          return response.json();
      }).then(response => {
          console.log(response.results);
          setPokemon(response.results)
      }).catch(err=>{
          console.log(err);
      });
    }
  return (
    <div>
        <button onClick={buscarPokemon}>Fetch Pokemon</button>
        <ul>
            {
                pokemon.map((pokemon, indice)=> <li key= {indice}>{pokemon.name}</li> )
            }
        </ul>
    </div>
  )
}

export default Pokemons