interface PokemonMoveProps {
  children: JSX.Element[] | string;
}

function PokemonMove(props: PokemonMoveProps): JSX.Element {
  return <div className="PokemonMove">{props.children}</div>;
}

export default PokemonMove;
