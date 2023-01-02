import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from '../models';

interface CardProps {
  url: string;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Card(props: CardProps): JSX.Element {
  const [pokemonData, setPokemonData] = useState<Pokemon>();

  useEffect(() => {
    axios({
      method: 'GET',
      url: props.url,
    })
      .then((response) => {
        const { data } = response;
        setPokemonData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleClick() {
    props.setSelectedPokemon(pokemonData);
    props.setModalIsOpen(true);
  }

  return (
    <div className="Card" key={pokemonData?.id} onClick={() => handleClick()}>
      <img src={pokemonData?.sprites.front_default} />
      <span>{pokemonData?.name}</span>
    </div>
  );
}

export default Card;
