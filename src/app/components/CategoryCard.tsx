import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge';


const CategoryCard = ({ category}:any) => {
  return (
        <Card style={{ width: '18rem',minHeight:'100%'}} bg='dark' text='white'>
        <Card.Img variant="top" src={category.image} />
        <Card.Body>
            <Card.Title>
                {category.title}
            </Card.Title>
        </Card.Body>
        </Card>  
    )
}

export default CategoryCard