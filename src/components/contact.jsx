import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firestore';

const Contact = ({contactData}) => {

    const handleDelete = async () => {
        const docRef = doc(db, 'contacts', contactData.id);
        try {
            await deleteDoc(docRef);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card>
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
                <Button variant='danger' onClick={handleDelete} >Eliminar</Button>
                {console.log(contactData)}
            </Card.Body>
        </Card>
    )
}

export default Contact;