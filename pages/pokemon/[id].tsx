import { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';
import confetti from 'canvas-confetti'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(false)

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
  }, [pokemon.id]) 

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if(!isInFavorites){
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { x:1, y:0 }
      })
    }

  }
  
  return (
    <Layout title={ pokemon.name }>
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body css={{ p:1 }}>
                <Card.Image 
                  src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                  alt={ pokemon.name }
                  width={"100%"}
                  height={200}
                />
            </Card.Body>            
          </Card>          
        </Grid>
        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{ pokemon.name }</Text>
              <Button
                color="gradient"
                ghost={ !isInFavorites }
                auto
                onPress={onToggleFavorite} 
              >
                { isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos' }                
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction={'row'} display={'flex'} gap={0}>
                <Image
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                <Image
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                <Image
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                <Image
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// [id]
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsPath151 = [...Array(151)].map((value, index) => ({ params: { id: `${index+1}` } }));
  return {
    paths: [...pokemonsPath151],
    //fallback: "blocking" // si mandan un id que no existe, continua sin problema no bota error
    fallback: false // si mandan un id que no existe retorna un 404
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { params } = ctx;
  const { id } = params as { id:string }  

  return (
    {
      props: {
        pokemon: await getPokemonInfo(id)
      }
    }
  )
}

export default PokemonPage