import { NextResponse } from 'next/server'

const DATA_SOURCE_URL="https://www.freetogame.com/api/games?platform=browser";

export async function GET(request:any){
    const res=await fetch(DATA_SOURCE_URL);
    const games=await res.json();
    const {searchParams}=new URL(request.url);
    const query=searchParams.get('query');
    if(query){
        const filterdGames=games.filter((game:any)=>{
            return game.title.toLowerCase().includes(query.toLowerCase())
        })
        return NextResponse.json(filterdGames);

    }
    

}