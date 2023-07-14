import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const GameCard = ({game}:any) => {
  return (
        <Card style={{ width: '18rem' }} bg='dark' text='white'>
        <Card.Img variant="top" src={game.thumbnail} />
        <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            <Card.Text>
                {game.short_description}
            </Card.Text>
            <Button variant="outline-light">Play Now</Button>
        </Card.Body>
        </Card>  
    )
}

export default GameCard