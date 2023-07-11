import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect} from "react";
import ContactListItem from "./ContactListItem";

type ContactListItemType = {
    id: string
    name: string
    gender: string
    birthday: number
    email: string
    phone: {
        number: number
        country_code: number
    }
    address: {
        street: string
        unit: number
        city: string
        state: string
        zip: string
        country: string
    }
}



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
    return contacts.length > 0 ? (
        <>
            <ul>
                {contacts.map(contact => {
                    return (
                        <ContactListItem name={(contact as ContactListItemType).name} id={(contact as ContactListItemType).id} />
                    );
                })}
            </ul>
            <Link to="/create">Create New Contact</Link>
            <label htmlFor="contacts-search">Search UrContacts:</label>
            <input type="search" id="contacts-search" name="query" />
            <button type="button">Search</button>
        </>
    ) : (
            <>
            <p>UrContact list is empty</p>
            <Link to="/create">Create New Contact</Link>
            </>
            
        )


}


export default ContactList;

 