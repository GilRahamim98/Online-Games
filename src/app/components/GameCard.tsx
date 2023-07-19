'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge';


const GameCard = ({game}:any) => {
    const pathname = usePathname()  

  return (
        <Card style={{ width: '18rem',minHeight:'100%'}} bg='dark' text='white'>
        <Card.Img variant="top" src={game.thumbnail} />
        <Card.Body>
            <Card.Title>
                {game.title}{' '}
            {
                pathname.includes('categories')?
                null:
                <Badge bg="light" text="dark" pill>
                {game.genre}
                </Badge>
            }
            </Card.Title>
            <Card.Text>
                {game.short_description}
            </Card.Text>
            <Button variant="outline-light"><Link href={game.game_url} style={{color: 'inherit',textDecoration: 'none'}} target="_blank">Play Now</Link></Button>
        </Card.Body>
        </Card>  
    )
}

export default GameCard