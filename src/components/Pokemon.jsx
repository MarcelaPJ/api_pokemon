import { useState } from 'react';

const Pokemon = (props) => {
    const [ pokemones, setPokemones ] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((response) => {
            setPokemones(response.results);
            console.log(response.results)
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <div>
            <button onClick={ fetchPokemon }> Fetch Pokemon</button>
            <ul>{pokemones.map((pokemon, index) => {
                return <li key={index}>{pokemon.name}</li>
            })}</ul>
        </div>
    )
}
export default Pokemon;