'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useAppContext } from '../context/store';


const Header = () => {
  const pathname = usePathname()  
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
        <Link className="navbar-brand" href="/">Gamez</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/allgames" className={pathname.includes('allgames')?'nav-link active':'nav-link'}>All Games</Link>
            <Link href="/categories"  className={pathname.includes('categories')?'nav-link active':'nav-link'}>Categories</Link>
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