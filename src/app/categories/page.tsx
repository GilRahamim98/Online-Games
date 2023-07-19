'use client'
import Link from 'next/link'
import { useState,useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../page.module.css'

import CategoryCard from '../components/CategoryCard';


const categories = () => {

    const[categories,setCategories]=useState([])
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchCategories=async()=>{
            const response=await fetch('/api/categories');
            const fetchedCategories= await response.json();
            setLoading(false);
            setCategories(fetchedCategories);
        }
        fetchCategories()

    },[])
    if(loading){
        return <Spinner animation="grow" variant="dark" />
    }
    
  return (
    <main className={styles.main}>
            <Container>
                <h1>Categories</h1>
                <Row>
                    {categories.map((category:any)=>
                        <Col key={category.title} sm={12} md={8} lg={6} xl={4} style={{marginTop:'1rem'}}>
                            <Link href={`/categories/${category.title}`} style={{ color: 'inherit',textDecoration:'none'}}>
                            <CategoryCard  category={category}/>

                            </Link>
                        </Col>
                    )}
                </Row>
            </Container>

    </main>
  )
}

export default categories