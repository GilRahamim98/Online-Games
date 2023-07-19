'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../page.module.css'
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/store";
import GameCard from "@/app/components/GameCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const gamesByCategoryPage = ({params}:any) => {
    const{games,setGames}=useAppContext();
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchGamesByCategory=async()=>{
            const response=await fetch(`/api/online-games/byCategory?query=${params.name}`);
            const fetchedGames= await response.json();
            setLoading(false);
            setGames(fetchedGames);
        }
        fetchGamesByCategory()
    

    },[])
    const capitalizeFirstLetter=(str:string)=> {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    if(loading){
        return <Spinner animation="grow" variant="dark" />
      }
    return (
        <main className={styles.main}>
        <Container>
          <h1>{capitalizeFirstLetter(params.name)} Games</h1>
          <Row >
          {games.map(game=>
                        <Col key={game.id} sm={12} md={6} lg={5} xl={4} style={{marginTop:'1rem'}}>
                          <GameCard game={game}/>
                        </Col>
                    )}
          </Row>
        </Container>
      
      </main>
    )
}

export default gamesByCategoryPage