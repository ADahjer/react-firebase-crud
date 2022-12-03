import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase/firestore';
import Contact from './contact';


const Contacts = () => {

    const [contacts, setContacts] = useState([]);

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
    
    return (
        <Container className='contacts'>
            {
                contacts.map((contact, idx) => (
                    <Contact contactData={contact} key={idx}  />
                ))
            }
        </Container>
    )
}

export default Contacts;