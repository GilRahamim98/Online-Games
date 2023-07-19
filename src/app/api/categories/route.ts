import { NextResponse } from "next/server";

const DATA_SOURCE_URL="https://www.freetogame.com/api/games?platform=browser";

export async function GET(request:Request){
    const res=await fetch(DATA_SOURCE_URL);
    const games=await res.json();
    const categories=[]
    const categoriesList:any=[];
    for(let game of games){
        if(!categoriesList.includes(game.genre.trim())){
            categoriesList.push(game.genre)
            categories.push({title:game.genre,image:game.thumbnail})
        }
    }
    return NextResponse.json(categories);
}