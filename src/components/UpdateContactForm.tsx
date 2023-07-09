import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateContactForm = () => {
    //TODO: control forms
    //TODO: fix warning that says date string is not in correct format
    //TODO: POST request place edited contact in database
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [street, setStreet] = useState("");
    const [unit, setUnit] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");

    const location = useLocation();
    const currentId = location.state;

    const fetchContacts = async () => {
        const response = await fetch('http://localhost:3000/contacts');
        const contactsData = await response.json();
        // console.log('Contacts:', contactsData)
        for (let i = 0; i < contactsData.length; i++) {
            // console.log(contactsData[i].id, contactsData[i].id == currentId)
            if (contactsData[i].id === currentId) {
                const currentContact = contactsData[i];

                console.log(currentContact);
                
                const nameArray = (currentContact.name).split(" ");
                setFirstName(nameArray[0]);
                setLastName(nameArray[1]);

                setGender(currentContact.gender);

                const birthdayYear = new Date(currentContact.birthday).getFullYear();
                const birthdayMonth = new Date(currentContact.birthday).getMonth();
                const birthdayDate = new Date(currentContact.birthday).getDate();
                setBirthday(`${birthdayYear}-${birthdayMonth}-${birthdayDate}`);

                setEmail(currentContact.email);

                const rawPhoneString = currentContact.phone.number.toString();
                setPhoneNumber(`${rawPhoneString.slice(0,3)}-${rawPhoneString.slice(3, 6)}-${rawPhoneString.slice(6)}`);
                
                setCountryCode(currentContact.phone.country_code);
                setStreet(currentContact.address.street);
                setUnit(currentContact.address.unit);
                setCity(currentContact.address.city);
                setProvince(currentContact.address.province);
                setZip(currentContact.address.zip);
                setCountry(currentContact.address.country);

                return;
            }
        }
        // console.log(currentContact)
    }

    useEffect(() => {
        fetchContacts();
    }, [])

    return (
        <>
            <h1>{`${firstName} ${lastName}`}</h1>
            <form>
                <input placeholder="First Name" type="text" value={firstName} />
                <input placeholder="Last Name" type="text" value={lastName} />
                <label htmlFor="gender-select">Gender:</label>
                <select name="gender" id="gender-select" defaultValue={gender}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="other">Other</option>
                    <option value="prefer-to-not-say">Prefer to not say</option>
                </select>
                <input 
                    name="birthday" 
                    type="date" 
                    value={birthday} />
                <input type="email" value={email}/>
                <input 
                    type="tel" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    placeholder="ex: 444-444-4444" 
                    value={phoneNumber}/>
                <input 
                    type="number" 
                    placeholder="country code" 
                    value={countryCode}/>
                <div id="address">
                    <p>Address:</p>
                    <input type="text" placeholder="Street" value={street}/>
                    <input type="text" placeholder="Unit" value={unit}/>
                    <input type="text" placeholder="City" value={city}/>
                    <input type="text" placeholder="State" value={province}/>
                    <input type="text" placeholder="ZIP Code" value={zip}/>
                    <input type="text" placeholder="Country" value={country}/>
                </div>
                <button>Submit</button>
            </form>
        </>
    )


}


export default UpdateContactForm;