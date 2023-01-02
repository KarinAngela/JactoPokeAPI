interface PokemonURL {
  name: string;
  url: string;
}

interface PokemonSprites {
  front_default: string;
  back_default: string;
}

interface PokemonMoveItem {
  move: PokemonMove;
}

interface PokemonMove {
  name: string;
  url: string;
}

interface PokemonType {
  name: string;
  url: string;
}

interface PokemonTypeItem {
  slot: number;
  type: PokemonType;
}

interface PokemonSprites {
  front_default: string;
  back_default: string;
}

interface Pokemon {
  id: number;
  name: string;
  moves: PokemonMoveItem[];
  types: PokemonTypeItem[];
  sprites: PokemonSprites;
}

export type { Pokemon, PokemonURL };
