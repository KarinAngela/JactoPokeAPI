import './App.css';
import PokemonList from './components/PokemonList';
import Barra from './components/Barra';
import { useState } from 'react';
import CustomModal from './components/CustomModal';
import { Pokemon } from './models';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>();

  return (
    <div className="App">
      <CustomModal 
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selected={selectedPokemon}
      />
      <Barra />
      <PokemonList
        setModalIsOpen={setModalIsOpen}
        setSelectedPokemon={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
