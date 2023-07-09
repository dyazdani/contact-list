import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteContactButton from "./DeleteContactButton";
/*
TYPES:
    name: string
    gender?: string
    birthday?: number
    email?: `${string}@${string}.${string}`
    phoneNumber?: number
    countryCode?: number
    street?: `${number} ${string}`
    unit?: string
    city?: string
    state?: string
    zip?: number
    country?: string

*/

type Birthday = number | null

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
//TODO: FIgure out why console logs are happening twice
const ContactDetails = () => {
    const param = useParams();
    console.log(param, typeof param)
    const [targetContact, setTargetContact] = useState(blankContact);
    
    const fetchContacts = async () => {
        const response = await fetch('http://localhost:3000/contacts');
        const contactsData = await response.json();
        console.log('Contacts:', contactsData)
        for (let i = 0; i < contactsData.length; i++) {
            console.log(contactsData[i].id, contactsData[i].id == param.id)
            if (contactsData[i].id === param.id) {
                setTargetContact(contactsData[i]);
                return;
            }
        }
        console.log(targetContact)
    }

    useEffect(() => {
        fetchContacts();
    }, []) 


    return (
        <>
            <h1>{targetContact.name}</h1>
            <address>
                gender: {targetContact.gender} <br />
                birthday: {typeof targetContact.birthday === 'number' ? (new Date(targetContact.birthday)).toLocaleDateString() : null}<br />
                email: <a href="mailto:">{targetContact.email}</a><br />
                phone: <a href={`tel:+${targetContact.phone.country_code}${targetContact.phone.phone}`}>{`${targetContact.phone.country_code}${targetContact.phone.phone}`}</a><br />
                address: <br />
                {targetContact.address.street} <br />
                {targetContact.address.unit} <br />
                {targetContact.address.city}, {targetContact.address.state} <br />
                {targetContact.address.zip} <br />
                {targetContact.address.country}
            </address> 
            <Link to={`/contacts/${param.id}/update`}>Update Contact</Link>
            <DeleteContactButton id={param.id}/>
        </>
    )


}


export default ContactDetails;