'use client'
import Link from "next/link"
import { useState,useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useAppContext } from '../context/store';
import { useRouter } from 'next/navigation';


const Header = () => {

  const {query,setQuery,setGames}=useAppContext();

  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const res=await fetch(`/api/online-games/search?query=${query}`);
      const games=await res.json();
      setGames(games);
      
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Gamez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/all-games">All Games</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query} 
              onChange={(e)=>setQuery(e.target.value)}
            />
            <Button variant="dark" type='submit' disabled={query==''}>Search</Button>
          </Form>
      </Container>
    </Navbar>
  )
}

export default Header