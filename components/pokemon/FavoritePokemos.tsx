import { FavoriteCardPokemon } from './FavoriteCardPokemon';
import { Grid } from '@nextui-org/react';


interface Props {
  pokemons: number[]
}

export const FavoritePokemos: React.FC<Props> = ({ pokemons }) => {

  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
      { pokemons.map( id => ( <FavoriteCardPokemon key={id} pokemonId={id} />)) }
    </Grid.Container>
  )
}
