'use client'
import { useState,useEffect} from 'react'
import { useAppContext } from '../context/store';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './page.module.css'
import GameCard from '../components/GameCard';


const allGamesPage = () => {
    const{games,setGames}=useAppContext();
    const[allGames,setAllGames]=useState<any>([])
    const[loading,setLoading]=useState(true);
    const[pageNumber,setPageNumber]=useState(0);
    const[items,setItems]=useState<any>([]);

    useEffect(()=>{
        const fetchGames=async()=>{
            const response=await fetch('/api/online-games');
            const fetchedGames= await response.json();
            setLoading(false);
            setGames(fetchedGames);
            currentGames(fetchedGames)
            
        }
        fetchGames()
    
      },[])

      
    useEffect(()=>{
        currentGames(games)
      },[pageNumber,games])

    const currentGames=(fetchedGames:any)=>{
        const newItems=[]

        setAllGames(fetchedGames.slice(pageNumber*8,pageNumber*8+8));
        for(let i=1;i<=fetchedGames.length/8+1;i++){
            newItems.push(createPaginationItem(i))
            setItems([...newItems])

        }
        
    }
    const createPaginationItem=(number:number)=>{
        
       return <Pagination.Item key={number} className={`${number === pageNumber+1 ? 'active':''}`} linkStyle={number === pageNumber+1 ?{background:'#eb6864',color:'black',border:'#eb6864',boxShadow:'none'}:{background:'black',color:'white',boxShadow:'none'}} onClick={()=>setPageNumber(number-1)}>
                    {number}
                  </Pagination.Item>
    }


    if(loading){
        return <Spinner animation="grow" variant="dark" />
    }



    return (
       <main className={styles.main}>
        <Container>
          <h1>All Games</h1>
              <Pagination size='lg'>{items}</Pagination>
          <Row >
          {allGames.map((game:any)=>
                        <Col key={game.id} sm={12} md={6} lg={4} xl={3} style={{marginTop:'1rem'}}>
                          <GameCard game={game}/>
                        </Col>
                    )}
          </Row>
        </Container>

      </main>
    )
}

export default allGamesPage