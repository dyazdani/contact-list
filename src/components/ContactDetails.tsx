import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteContactButton from "./DeleteContactButton";

const blankContact = {
    id: null,
    name: null,
    gender: null,
    birthday: null,
    email: null,
    phone: {
        phone: null,
        country_code: null
    },
    address: {
        street: null,
        unit: null,
        city: null,
        state: null,
        zip: null,
        country: null
    }
}
const ContactDetails = () => {
    const {contactID} = useParams();
    const [targetContact, setTargetContact] = useState(blankContact);
    
    const fetchContacts = async () => {
        const response = await fetch('http://localhost:3000/contacts');
        const contactsData = await response.json();
        for (let i = 0; i < contactsData.length; i++) {
            if (contactsData[i].id === contactID) {
                setTargetContact(contactsData[i]);
                return;
            }
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []) 

    console.dir(targetContact)


    return (
        <>
            <h1>{targetContact.name}</h1>
            <address>
                gender: {targetContact.gender} <br />
                birthday: {typeof targetContact.birthday === 'number' ? (new Date(targetContact.birthday)).toLocaleDateString() : null}<br />
                email: <a href="mailto:">{targetContact.email}</a><br />
                phone: <a href={`tel:+${targetContact.phone.country_code}-${targetContact.phone.number}`}>{`+${targetContact.phone.country_code}-${targetContact.phone.number}`}</a><br />
                address: <br />
                {targetContact.address.street} <br />
                {targetContact.address.unit} <br />
                {targetContact.address.city}, {targetContact.address.state} <br />
                {targetContact.address.zip} <br />
                {targetContact.address.country}
            </address> 
            <Link to={`/contacts/${contactID}/update`} state={contactID}>Update Contact</Link>
            <DeleteContactButton id={contactID ? contactID : ""}/>
        </>
    )


}


export default ContactDetails;