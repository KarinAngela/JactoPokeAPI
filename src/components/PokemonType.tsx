interface PokemonTypeProps {
  children: JSX.Element[] | string;
}

function PokemonType(props: PokemonTypeProps): JSX.Element {
  return <div className="PokemonType">{props.children}</div>;
}

export default PokemonType;
