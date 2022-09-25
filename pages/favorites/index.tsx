import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { useState, useEffect } from 'react';
import { localFavorites } from '../../utils';
import { Grid } from '@nextui-org/react';
import { FavoritePokemos } from '../../components/pokemon';

export const FavoritesPage = () => {

  const [favoritePokemos, setFavoritePokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemos(localFavorites.pokemonsId())
  }, [])

  return (
    <Layout title='Favoritos'>
      {
        favoritePokemos.length === 0
        ? <NoFavorites />
        : <FavoritePokemos pokemons={favoritePokemos} />
      }
    </Layout>
  )
}

export default FavoritesPage