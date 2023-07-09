import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/*
TYPES:
    firstName: string
    lastName: string
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

const blankContact = {
    id: null,
    name: "",
    gender: null,
    birthday: "",
    email: "",
    phone: {
        phone: "",
        country_code: ""
    },
    address: {
        street: "",
        unit: "",
        city: "",
        state: "",
        zip: "",
        country: ""
    }
}

const UpdateContactForm = () => {
    //TODO: use variables to store boolean value for selection option chosen in db
    //TODO: use a get request to get data and then populate the form fields with those data values.
    //TODO: PUT request to update the existing data with data in the request
    const [currentContact, setCurrentContact] = useState(blankContact);

    const location = useLocation();
    const currentId = location.state;

    const fetchContacts = async () => {
        const response = await fetch('http://localhost:3000/contacts');
        const contactsData = await response.json();
        console.log('Contacts:', contactsData)
        for (let i = 0; i < contactsData.length; i++) {
            console.log(contactsData[i].id, contactsData[i].id == currentId)
            if (contactsData[i].id === currentId) {
                setCurrentContact(contactsData[i]);
                return;
            }
        }
        console.log(currentContact)
    }

    useEffect(() => {
        fetchContacts();
    }, [])

    // Breaking up the data to populate the form inputs
    const nameArray = (currentContact.name).split(" ");
    const firstName = nameArray[0];
    const lastName = nameArray[1];

    const birthdayYear = new Date(currentContact.birthday).getFullYear();
    const birthdayMonth = new Date(currentContact.birthday).getMonth();
    const birthdayDate = new Date(currentContact.birthday).getDate();

    const rawPhoneString = currentContact.phone.phone.toString();
    const phoneNumber = `${rawPhoneString.slice(0,3)}-${rawPhoneString.slice(3, 6)}-${rawPhoneString.slice(6)}`

    return (
        <>
            <h1>{`${firstName} ${lastName}`}</h1>
            <form>
                <input placeholder="First Name" type="text" value={firstName} />
                <input placeholder="Last Name" type="text" value={lastName} />
                <label htmlFor="gender-select">Gender:</label>
                <select name="gender" id="gender-select">
                    <option value="">--Please choose an option--</option>
                    <option value="female" selected={currentContact.gender === "female"}>Female</option>
                    <option value="male" selected={currentContact.gender === "male"}>Male</option>
                    <option value="non-binary" selected={currentContact.gender === "non-binary"}>Non-Binary</option>
                    <option value="other" selected={currentContact.gender === "other"}>Other</option>
                    <option 
                        value="prefer-to-not-say" 
                        selected={currentContact.gender === "prefer-not-to-say"}>Prefer to not say</option>
                </select>
                <input 
                    name="birthday" 
                    type="date" 
                    value={`${birthdayYear}-${birthdayMonth}-${birthdayDate}`} />
                <input type="email" value={currentContact.email}/>
                <input 
                    type="tel" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    placeholder="ex: 444-444-4444" 
                    value={phoneNumber}/>
                <input 
                    type="number" 
                    placeholder="country code" 
                    value={currentContact.phone.country_code}/>
                <div id="address">
                    <p>Address:</p>
                    <input type="text" placeholder="Street" value={currentContact.address.street}/>
                    <input type="text" placeholder="Unit" value={currentContact.address.unit}/>
                    <input type="text" placeholder="City" value={currentContact.address.city}/>
                    <input type="text" placeholder="State" value={currentContact.address.state}/>
                    <input type="text" placeholder="ZIP Code" value={currentContact.address.zip}/>
                    <input type="text" placeholder="Country" value={currentContact.address.country}/>
                </div>
                <button>Submit</button>
            </form>
        </>
    )


}


export default UpdateContactForm;