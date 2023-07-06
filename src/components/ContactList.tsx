import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactListItem from "./ContactListItem";

// interface contactListItemType {
//     id: string | null
//     name: string | null
//     gender: string | null
//     birthday: number | null
//     email: string | null
//     phone: {
//         number: number | null
//         country_code: number | null
//     }
//     address: {
//         street: string | null
//         unit: number | null
//         city: string | null
//         state: string | null
//         zip: string | null
//         country: string | null
//     }
// }

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    
    const fetchContacts = async () => {
        const response = await fetch('http://localhost:3000/contacts');
        const contactsData = await response.json();
        setContacts(contactsData);
    }

    useEffect(() => {
        fetchContacts();
    }, []) 

    
    //TODO: fix TS errors
    return contacts ? (
        <>
            <ul>
                {contacts.map(contact => {
                    return (
                        <ContactListItem name={contact.name} id={contact.id}></ContactListItem>
                    );
                })}
            </ul>
            <Link to="/create">Create New Contact</Link>
        </>
        
    ) : (
            <>
            <p>Unable to load UrContacts. Please try again.</p>
            <Link to="/create">Create New Contact</Link>
            </>
            
        )


}


export default ContactList;

 