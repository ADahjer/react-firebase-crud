import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Contact = ({contactData}) => {

    return (
        <Card className='contact__card'>
            <Card.Img variant='top' src={contactData.img} className='contact__img' />
            <Card.Body>
                <Card.Title>{`${contactData.nombre} ${contactData.apellido}`}</Card.Title>
                <Card.Subtitle>{contactData.correo}</Card.Subtitle>
            </Card.Body>
            <ListGroup variant='flush'>
                <ListGroup.Item>Telefono: {contactData.celular}</ListGroup.Item>
                <ListGroup.Item>Direccion: {contactData.direccion}</ListGroup.Item>
                <ListGroup.Item>Ciudad: {contactData.ciudad}</ListGroup.Item>
                <ListGroup.Item>Barrio: {contactData.barrio}</ListGroup.Item>
            </ListGroup>
            <Card.Body className='contact__buttons'>
                <Button variant='warning'>Editar</Button>
                <Button variant='danger'>Eliminar</Button>
                {console.log(contactData)}
            </Card.Body>
        </Card>
    )
}

export default Contact;