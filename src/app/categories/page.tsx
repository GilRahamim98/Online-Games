'use client'
import { useState,useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './page.module.css'


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
    <div>
        {categories.map(category=><p key={category}>{category}</p>)}
    </div>
  )
}

export default categories