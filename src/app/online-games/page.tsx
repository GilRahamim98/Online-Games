import React from 'react'

async function fetchGames(){
    const response=await fetch('https://www.freetogame.com/api/games?platform=browser');
    const games= response.json();
    return games;
}

const OnlineGamesPage = async() => {
    const games=await fetchGames();
    console.log(games);
    
  return (
    <div>{games[0].title}</div>
  )
}

export default OnlineGamesPage