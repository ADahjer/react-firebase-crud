import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteModal = ({contactData, del, setDel, handleDelete}) => {

    const handleCancel = () => {
        setDel(false);
    }

    return (
        <Modal show={del} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Esta seguro de elimar a {`${contactData.nombre} ${contactData.apellido}`}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={handleDelete} >Eliminar</Button>
                <Button variant='success' onClick={handleCancel} >Cancelar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;