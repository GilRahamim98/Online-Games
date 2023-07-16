'use client'
import { useState,useEffect} from 'react'
import { useAppContext } from './context/store';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner';

import GameCard from './components/GameCard';

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './page.module.css'
import { Col } from 'react-bootstrap';

export default function Home() {
  const{games,setGames}=useAppContext();
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    const fetchTopGames=async()=>{
        const response=await fetch('/api/online-games');
        const fetchedGames= await response.json();
        setLoading(false);
        setGames(fetchedGames.slice(0,8));
    }
    fetchTopGames()

  },[])

  if(loading){
    return  <Spinner animation="grow" variant="dark" />
  }

  return (
      <main className={styles.main}>
        <Container>
          <h1>Browser Games</h1>
          <Row >
          {games.map(game=>
                        <Col key={game.id} sm={12} md={6} lg={4} xl={3} style={{marginTop:'1rem'}}>
                          <GameCard game={game}/>
                        </Col>
                    )}
          </Row>
        </Container>
      
      </main>
    
  )
}
