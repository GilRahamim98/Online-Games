import { NextResponse } from "next/server";

const DATA_SOURCE_URL="https://www.freetogame.com/api/games?platform=browser";

export async function GET(request:Request){
    const res=await fetch(DATA_SOURCE_URL);

    const games=await res.json();
    return NextResponse.json(games);
}