import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PokemonType from './PokemonType';
import PokemonMove from './PokemonMove';
import { Pokemon } from '../models';

interface CustomModalProps {
  selected: Pokemon;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CustomModal(props: CustomModalProps): JSX.Element {

  function typesToJSX(): JSX.Element[] | undefined {
    const typeItems = props.selected?.types;
    return typeItems?.map((typeItem) => (
      <PokemonType>{typeItem.type.name}</PokemonType>
    ));
  }

  function movesToJSX(): JSX.Element[] | undefined {
    const moveItems = props.selected?.moves;
    return moveItems?.map((moveItem) => <PokemonMove>{moveItem.move.name}</PokemonMove>);
  }

  return (
    <Modal isOpen={props.modalIsOpen}>
      <div className="ModalClose" onClick={() => props.setModalIsOpen(false)}>
        x
      </div>
      <div className="ModalContent">
        <div className="PokemonImage">
          <img src={props.selected?.sprites.front_default} />
        </div>

        <div className="PokemonTypes">{typesToJSX()}</div>

        <div className="PokemonMoves">{movesToJSX()}</div>
      </div>
    </Modal>
  );
}

export default CustomModal;
