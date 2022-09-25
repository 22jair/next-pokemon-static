import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link'
import React from 'react'

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'start',
      padding: '0, 20px',
      position: 'sticky',
      top: 0,
      zIndex: 99,
      backgroundColor: theme?.colors.gray100.value
    }}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      {/* Error in console */}
      <NextLink href={"/"} passHref>        
        <Link>
          <Text color="white" h2> P </Text>
          <Text color="white" h3> okémon </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex:1 }}/>
      <NextLink href={"/favorites"} passHref>        
        <Link css={{ marginRight: '10px' }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>      
    </div>
  )
}
