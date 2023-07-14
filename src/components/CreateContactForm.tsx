import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const parsePhoneNumber = (phoneNumberString: string) => {
    return +(phoneNumberString.split('').filter(el => el !== '-').join(''));
}

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
              number: parsePhoneNumber(phoneNumber),
              country_code: parsePhoneNumber(countryCode)
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
            <input 
                placeholder="First Name" 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input 
                placeholder="Last Name" 
                type="text" 
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
            <input 
                name="birthday" 
                type="date" 
                value={birthday} 
                onChange={(e) => setBirthday(e.target.value)}/>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
            <input type="tel" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                placeholder="ex: 444-444-4444" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)}/>
            <input 
                type="number" 
                placeholder="country code"
                value={countryCode} 
                onChange={(e) => setCountryCode(e.target.value)}/>
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
            <button>Submit</button>
        </form>
    )


}


export default CreateContactForm;