import { NextResponse } from 'next/server'

export async function GET(request:any){
    const {searchParams}=new URL(request.url);
    const query=searchParams.get('query');
    const res=await fetch(`https://www.freetogame.com/api/games?platform=browser&category=${query}`);
    const games=await res.json();
    return NextResponse.json(games);
}