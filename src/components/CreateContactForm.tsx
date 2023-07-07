import { useState, useEffect } from "react";

const parsePhoneNumber = (phoneNumberString: string) => {
    return +(phoneNumberString.split('').filter(el => el !== '-').join(''));
}

const CreateContactForm = () => {
    const [contactId, setContactId] = useState((Math.random() * 170000000000000000).toString())
    const [firstName, setFirstName] = useState("Steve");
    const [lastName, setLastName] = useState("Stevenson");
    const [gender, setGender] = useState("Male");
    const [birthday, setBirthday] = useState(233242385);
    const [email, setEmail] = useState("steve.stevenson@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState(4958394432);
    const [countryCode, setCountryCode] = useState(1);
    const [street, setStreet] = useState(`666 Devil's Lane`);
    const [unit, setUnit] = useState("Apt 123");
    const [city, setCity] = useState(`Carson City`);
    const [province, setProvince] = useState(`NV`);
    const [zip, setZip] = useState(`85454`);
    const [country, setCountry] = useState(`USA`);

    async function postJSON() {
        const data = {
            "contactId": contactId,
            "name": `${firstName} ${lastName}`,
            "gender": gender,
            "birthday": birthday,
            "email": email,
            "phone": {
              "number": phoneNumber,
              "country_code": countryCode
            },
            "address": {
              "street": street,
              "unit": unit,
              "city": city,
              "state": province,
              "zip": zip,
              "country": country
            }
          }
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
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      useEffect(() => {
        postJSON()
      }, []);

    return (
        <form>
            <input 
                placeholder="First Name" 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}/>
            <input 
                placeholder="Last Name" 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}/>
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
            <input 
                name="birthday" 
                type="date" 
                value={birthday} 
                onChange={(e) => setBirthday(Date.parse(e.target.value))}/>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
            <input type="tel" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                placeholder="ex: 444-444-4444" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(parsePhoneNumber(e.target.value))}/>
            <input 
                type="number" 
                placeholder="country code"
                value={countryCode} 
                onChange={(e) => setCountryCode(parseInt(e.target.value))}/>
            <div id="address">
                <p>Address:</p>
                <input 
                    type="text" 
                    placeholder="Street"
                    value={street} 
                    onChange={(e) => setStreet(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder="Unit"
                    value={unit} 
                    onChange={(e) => setUnit(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder="City"
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder="State"
                    value={province} 
                    onChange={(e) => setProvince(e.target.value)}/>
                <input
                    type="text" 
                    placeholder="ZIP Code"
                    value={zip} 
                    onChange={(e) => setZip(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder="Country"
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)}/>
            </div>
            <button type="button">Submit</button>
        </form>
    )


}


export default CreateContactForm;