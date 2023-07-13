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
    
    // console.log("searchInput is: ", searchInput);
    const query = searchParams.get('query');
    // console.log("Your search params are:", query);
    

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

    //TODO: fix the any typing in matchByNameSearResults
    const getMatchingNames = (nameStr: string | null) => {
        const namesArray: any[] = [];
        contacts.map((contact: any) => {
            if (contact.name.includes(nameStr)) {
                namesArray.push(contact.name);
            }
        })
        return namesArray;
    }

    // console.log("search results: ", getMatchingNames(query))

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

    
    return contacts.length > 0 ? (
        <>
            <ul>
                {contacts.map(contact => {
                    console.log("query value is: ", query);
                    console.log("Truthiness of query: ", new Boolean(query).valueOf());
                    if (!query) {
                        return (
                            <li>
                                <ContactListItem 
                                    key={(contact as ContactListItemType).id}
                                    name={(contact as ContactListItemType).name} 
                                    id={(contact as ContactListItemType).id} />    
                            </li>
                        )
                    }
                    if (getMatchingNames(query).includes((contact as ContactListItemType).name)) {
                        return (
                            <li>
                                <ContactListItem 
                                    key={(contact as ContactListItemType).id}
                                    name={(contact as ContactListItemType).name} 
                                    id={(contact as ContactListItemType).id} />    
                            </li>
                        )                   
                    }
                })
                }
            </ul>
            <Link to="/create">Create New Contact</Link>
                <label htmlFor="contacts-search">Search UrContacts:</label>
                <input 
                    type="search" 
                    id="contacts-search" 
                    name="query" 
                    placeholder="Search here..."
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="button" onClick={handleClick}>Search</button>
                <Link to="/contacts">See All Contacts</Link>
        </>
    ) : (
            <>
            <p>UrContact list is empty</p>
            <Link to="/create">Create New Contact</Link>
            </>
            
        )


}


export default ContactList;

 