import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firestore';

const UpdateModal = ({contactData, update, setUpdate}) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');

    const handleClose = () => {
        setUpdate(false);
    }

    const handleSave = async () => {
        const user = {
            nombre: name,
            apellido: lastName,
            correo: email,
            direccion: address,
            celular: phone,
            ciudad: city,
            barrio: neighborhood,
            img: `https://picsum.photos/seed/${name}/200`
        }

        const docRef = doc(db, 'contacts', contactData.id);

        try {
            await updateDoc(docRef, user);
        } catch (error) {
            console.log(error);
        }

        handleClose();
    }

    useEffect(() => {
        setName(contactData.nombre);
        setLastName(contactData.apellido);
        setEmail(contactData.correo);
        setAddress(contactData.direccion);
        setPhone(contactData.celular);
        setCity(contactData.ciudad);
        setNeighborhood(contactData.barrio);
    }, [contactData.apellido, contactData.barrio, contactData.celular, contactData.ciudad, contactData.correo, contactData.direccion, contactData.nombre, update]);

    return (
        <Modal show={update} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear nuevo contacto</Modal.Title>
            </Modal.Header>
            <Container>
                <Form>
                    <Row className='my-3'>
                        <Col>
                            <Form.Control placeholder='Nombre' onChange={(e) => setName(e.target.value)} defaultValue={name} />
                        </Col>
                        <Col>
                            <Form.Control placeholder='Apellido' onChange={(e) => setLastName(e.target.value)} defaultValue={lastName} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control type='email' placeholder='Correo electronico' onChange={(e) => setEmail(e.target.value)} defaultValue={email} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control placeholder='Numero de telefono'onChange={(e) => setPhone(e.target.value)} defaultValue={phone} />
                        </Col>
                        <Col>
                            <Form.Control placeholder='Direccion' onChange={(e) => setAddress(e.target.value)} defaultValue={address} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control placeholder='Ciudad' onChange={(e) => setCity(e.target.value)} defaultValue={city} />
                        </Col>
                        <Col>
                            <Form.Control placeholder='Barrio' onChange={(e) => setNeighborhood(e.target.value)} defaultValue={neighborhood} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col className='modal__buttons'>
                            <Button variant='primary' className='modal__button' onClick={handleSave} >Actualizar</Button>
                            <Button variant='danger' className='modal__button' onClick={handleClose} >Cancelar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Modal>
    )
}

export default UpdateModal;