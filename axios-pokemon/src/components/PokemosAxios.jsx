import React, { useState } from 'react'
import axios from 'axios';

const PokemosAxios = () => {
    const [pokemon, setPokemon] = useState([])

    const buscarPokemon = () =>{

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then(response=>{
        console.log(response)
        setPokemon(response.data.results);
    })
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

export default PokemosAxios 