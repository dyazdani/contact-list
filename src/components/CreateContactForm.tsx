import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const CreateContactForm = () => {
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

    const navigate = useNavigate();


      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name: `${firstName} ${lastName}`,
            gender,
            birthday: birthday ? new Date(birthday).getTime() / 1000 : "",
            email,
            phone: {
              number: phoneNumber,
              country_code: countryCode
            },
            address: {
              street,
              unit,
              city,
              province,
              zip,
              country
            }
        };
        console.log(data)
        console.log(JSON.stringify(data))
        try {
          const response = await fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          
          const result = await response.json();
          console.log("Success:", result);
          navigate("/contacts")
        } catch (error) {
          console.error("Error:", error);
        }
      }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first-name">First Name: </label>
            <input 
                type="text" 
                id="first-name"
                required={!lastName && true}
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="last-name">Last Name: </label>
            <input 
                type="text"
                id="last-time"
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="gender-select">Gender:</label>
            <select 
                name="gender" 
                id="gender-select" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
            >
                <option value="">--Please choose an option--</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-Binary</option>
                <option value="other">Other</option>
                <option value="prefer-to-not-say">Prefer to not say</option>
            </select>
            <label htmlFor="birthday">Birthday: </label>
            <input //TODO: do not accept dates in the future from today
                name="birthday" 
                type="date" 
                id="birthday"
                value={birthday} 
                onChange={(e) => setBirthday(e.target.value)}/>
            <label htmlFor="email">Email: </label>
            <input 
                type="email" 
                value={email} 
                id="email"
                onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="phone-number">Phone Number: </label>
            <input type="tel" //TODO: fix phone number rendering as undefined
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" //TODO: Show the phone number format in label?
                placeholder="ex: 444-444-4444" 
                id="phone-number"
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)}/>
            <label htmlFor="country-code">Country Code: </label>
            <input //TODO: only allow input that is integer >= 0 and up to 4 digits.
                type="number" 
                id="country-code"
                value={countryCode} 
                onChange={(e) => setCountryCode(e.target.value)}/>
            <div id="address">
                <p>Address:</p>
                <label htmlFor="street">Street: </label>
                <input 
                    type="text" 
                    id="street"
                    value={street} 
                    onChange={(e) => setStreet(e.target.value)}/>
                <label htmlFor="unit">Unit: </label>
                <input 
                    type="text" 
                    id="unit"
                    value={unit} 
                    onChange={(e) => setUnit(e.target.value)}/>
                <label htmlFor="city">City: </label>
                <input 
                    type="text" 
                    id="city"
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}/>
                <label htmlFor="state">State: </label>
                <input 
                    type="text" 
                    id="state"
                    value={province} 
                    onChange={(e) => setProvince(e.target.value)}/>
                <label htmlFor="zip-code">ZIP Code: </label>
                <input
                    type="text" 
                    id="zip-code"
                    value={zip} 
                    onChange={(e) => setZip(e.target.value)}/>
                <label htmlFor="country">Country: </label>
                <input 
                    type="text" 
                    id="country"
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    )


}


export default CreateContactForm;