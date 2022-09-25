const toggleFavorites = ( id:number ) => {
  
  if(typeof window === 'undefined') return false;
  let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

  if ( favorites.includes(id) ){
    favorites = favorites.filter( pokeId => pokeId !== id );
  }else{
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = ( id:number ): boolean => {  
  if(typeof window === 'undefined') return false;
  let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );
  return favorites.includes(id)  
}

const pokemonsId = (): number[] => {
  return JSON.parse( localStorage.getItem('favorites') || '[]' );
}

const exportData = {
  toggleFavorites,
  existInFavorites,
  pokemonsId
}

export default exportData;