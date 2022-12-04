import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase/firestore';
import Contact from './contact';
import FormModal from './modal';


const Contacts = () => {

    const [contacts, setContacts] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const q = query(collection(db, 'contacts'));
        onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.docs.forEach(doc => {
                data.push({...doc.data(), id: doc.id});
            });
            setContacts(data);
        })
    }, []);

    const handleShow = () => {
        setShow(true);
    }
    
    return (
        <>
            <Container className='contacts__container'>
                <Button variant='success' onClick={handleShow} className='addButton' >Añadir contacto</Button>
                <div className='contacts'>
                    {
                        contacts.map(contact => (
                            <Contact contactData={contact} key={contact.id}  />
                        ))
                    }
                </div>
            </Container>
            <FormModal show={show} setShow={setShow} />
        </>
    )
}

export default Contacts;