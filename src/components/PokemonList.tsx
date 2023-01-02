import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import { Pokemon, PokemonURL } from '../models';

interface PokemonListProps {
  setSelectedPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function PokemonList(props: PokemonListProps): JSX.Element {
  const [allPokemon, setAllPokemon] = useState<PokemonURL[]>([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
    })
      .then((response) => {
        const { results } = response.data;
        setAllPokemon(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function allPokemonToJSX(): JSX.Element[] {
    return allPokemon.map((pokemon) => (
      <Card
        url={pokemon.url}
        setSelectedPokemon={props.setSelectedPokemon}
        setModalIsOpen={props.setModalIsOpen}
      />
    ));
  }

  return <div className="PokemonList">{allPokemonToJSX()}</div>;
}

export default PokemonList;
