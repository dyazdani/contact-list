import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ContactList = () => {
    const [contacts, setContacts] = useState(null);
    
    const fetchContacts = async () => {
        const response = await fetch('http://localhost:3000/contacts');
        const contactsData = await response.json();
        setContacts(contactsData);
    }

    useEffect(() => {
        fetchContacts();
    }, []) 
    return (
        <>
            <ul>Test</ul>
            <Link to="/create">Create Contact</Link>
        </>
        
    )


}


export default ContactList;

 