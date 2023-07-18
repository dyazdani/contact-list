import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteContactButton from "./DeleteContactButton";

const blankContact = {
    id: null,
    name: null,
    gender: null,
    birthday: "",
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
//TODO: Figure out why console logs are happening twice
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


    return (
        <>
            <h1>{targetContact.name}</h1>
            <dl>
                <div>
                    <dt>gender: </dt>
                    <dd>{targetContact.gender}</dd>
                </div>
                <div>
                    <dt>birthday: </dt>
                    <dd>
                        <time dateTime={new Date(targetContact.birthday).toISOString()}>{typeof targetContact.birthday === 'number' && (new Date(targetContact.birthday)).toLocaleDateString()}</time>
                    </dd>
                </div>
                <div>
                    <dt>email: </dt>
                    <dd><a href="mailto:">{targetContact.email}</a></dd>
                </div>
                <div>
                    <dt>phone: </dt>
                    <dd><a href={`tel:+${targetContact.phone.country_code}${targetContact.phone.phone}`}>{`${targetContact.phone.country_code}${targetContact.phone.phone}`}</a></dd>
                </div>
                </dl>
                <div id="address">
                    <h4>address:</h4>
                    <address>{targetContact.address.street}  {targetContact.address.unit} <br />
                    {targetContact.address.city}, {targetContact.address.state}  {targetContact.address.zip}<br />
                    {targetContact.address.country}</address>
                </div>
            <div className="details-buttons">
                <button type="button">
                    <Link to={`/contacts/${contactID}/update`} state={contactID}>Update Contact</Link>
                </button> 
                <DeleteContactButton id={contactID ? contactID : ""}/>
            </div> 
        </>
    )


}


export default ContactDetails;