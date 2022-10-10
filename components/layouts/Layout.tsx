import Head from 'next/head'
import { Navbar } from '../ui/Navbar';

interface Props {
  children?: JSX.Element,
  title: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {

  

  return (
    <>
      <Head>
        <title>{ title || 'PokémonApp' }</title>
        <meta name="author" content="Jair Arteata" />
        <meta name="description" content={`Informacion sobre el pokémon ${ title }`} />
        <meta name="keywords" content={`${ title } pokemon, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '20px 20px'
      }}>
        { children }
      </main>

    </>
  )
}
