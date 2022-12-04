import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firestore';

const FormModal = ({show, setShow}) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');

    const handleClose = () => {
        setName('');
        setLastName('');
        setEmail('');
        setAddress('');
        setPhone('');
        setCity('');
        setNeighborhood('');
        setShow(false);
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

        try {
            await addDoc(collection(db, 'contacts'), user)
            handleClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear nuevo contacto</Modal.Title>
            </Modal.Header>
            <Container>
                <Form>
                    <Row className='my-3'>
                        <Col>
                            <Form.Control placeholder='Nombre' onChange={(e) => setName(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder='Apellido' onChange={(e) => setLastName(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control type='email' placeholder='Correo electronico' onChange={(e) => setEmail(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control placeholder='Numero de telefono'onChange={(e) => setPhone(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder='Direccion' onChange={(e) => setAddress(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control placeholder='Ciudad' onChange={(e) => setCity(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder='Barrio' onChange={(e) => setNeighborhood(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col className='modal__buttons'>
                            <Button variant='success' className='modal__button' onClick={handleSave} >Guardar</Button>
                            <Button variant='danger' className='modal__button' onClick={handleClose} >Cancelar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Modal>
    )
}

export default FormModal;