import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
    const [searchInput, setSearchInput] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    
    const query = searchParams.get('query') ?? "";

    const handleClick = () => {
        searchInput && setSearchParams({query: searchInput});
    }

    const fetchContacts = async () => {
        const response = await fetch('http://localhost:3000/contacts');
        const contactsData = await response.json();
        setContacts(contactsData);
    }

    useEffect(() => {
        fetchContacts();
    }, []) 

    const getContactsMatchedToString = (nameStr: string) => contacts.filter((contact: ContactListItemType) => contact.name.includes(nameStr));

    // console.log("search results: ", getContactsMatchedToString(query))

    //TODO: if I want to have a search for all values nested in contact, then I can start here
    // let contactValues: unknown[] = [];
    // if (contacts.length) {
    //     console.log("Line 51: ", contacts);
    //     contactValues = contacts.flatMap(contact  => {
    //         const allNestedValuesInObject = [];
    //         for (const property in contact) {
    //             if (typeof contact[property] === 'object' && contact[property] !== null) {
    //                 allNestedValuesInObject.push(Object.values(contact[property]));
    //             } else {
    //                 allNestedValuesInObject.push(contact[property]);
    //             }
    //         }
    //         return allNestedValuesInObject.flat();
    //     })
    // }

    const contactsMatchedToQuery = getContactsMatchedToString(query); 

    
    return contacts.length > 0 ? (
        <>
            <ul>
                {contactsMatchedToQuery.map((contact: ContactListItemType) => {
                    return (
                        <li key={contact.id}>
                            <ContactListItem 
                                name={contact.name} 
                                id={contact.id} 
                            />    
                        </li>
                    )
                })}
            </ul>
            <div>
                <label htmlFor="contacts-search">Search UrContacts: </label>
                <input 
                    type="search" 
                    id="contacts-search" 
                    name="query" 
                    placeholder="Search here..."
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button id="search-button" type="button" onClick={handleClick}>Search</button>
            </div>
            <div id="button-div">
                <button type="button"><Link to="/create">Create New Contact</Link></button>
                <button type="button"><Link to="/contacts">See All Contacts</Link></button>
            </div>
        </>
    ) : (
            <>
            <p>UrContact list is empty</p>
            <Link to="/create">Create New Contact</Link>
            </>
            
        )


}


export default ContactList;

 