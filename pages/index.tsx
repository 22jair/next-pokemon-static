import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  
  return (   
    <Layout title="Listados de Pokémons">
      <>
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map( pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>
      </>
    </Layout>
  )
}

// se ejecuta unicamente en el lado del servidor y en buildtime
export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map( ( poke, index ) => ({
    ...poke,
    id: (index+1),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))

  return (
    {
      props: {pokemons}
    }
  )
}

export default HomePage
