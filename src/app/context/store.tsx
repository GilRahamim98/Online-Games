'use client'
import React, { createContext, useState,useContext} from 'react';

interface ContextProps {
  games: any[];
  setGames: React.Dispatch<React.SetStateAction<any[]>>;
  query:string;
  setQuery:React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<ContextProps>({
  games: [],
  setGames: () => {},
  query:"",
  setQuery:()=>{}

});

export const AppProvider: React.FC = ({ children }:any) => {
  const [games, setGames] = useState<any[]>([]);
  const [query,setQuery]=useState<string>("");

  return (
    <AppContext.Provider value={{ games, setGames,query,setQuery }} >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext=()=>useContext(AppContext);

