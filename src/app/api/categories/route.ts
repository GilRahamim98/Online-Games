import { NextResponse } from "next/server";

const DATA_SOURCE_URL="https://www.freetogame.com/api/games?platform=browser";

export async function GET(request:Request){
    const res=await fetch(DATA_SOURCE_URL);
    const games=await res.json();
    const categoriesList:any=[];
    for(let game of games){
        if(!categoriesList.includes(game.genre)){
            categoriesList.push(game.genre)
        }
    }
    return NextResponse.json(categoriesList);
}