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

const UpdateContactForm = () => {
    //TODO: use variables to store boolean value for selection option chosen in db

    const birthdayYear = new Date(birthday).getFullYear();
    const birthdayMonth = new Date(birthday).getMonth();
    const birthdayDate = new Date(birthday).getDate();

    return (
        <>
            <h1>{`${firstName} ${lastName}`}</h1>
            <form>
                <input placeholder="First Name" type="text" value={firstName} />
                <input placeholder="Last Name" type="text" value={lastName} />
                <label htmlFor="gender-select">Gender:</label>
                <select name="gender" id="gender-select">
                    <option value="">--Please choose an option--</option>
                    <option value="female" selected={isFemaleSelected}>Female</option>
                    <option value="male" selected={isMaleSelected}>Male</option>
                    <option 
                        value="prefer-to-not-say" 
                        selected={isPreferToNotSaySelected}>Prefer to not say</option>
                </select>
                <input 
                name="birthday" 
                type="date" 
                value={`${birthdayYear}-${birthdayMonth}-${birthdayDate}`} />
                <input type="email" value={email}/>
                <input 
                    type="tel" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    placeholder="ex: 444-444-4444" 
                    value={phoneNumber}/>
                <input type="number" placeholder="country code" value={countryCode}/>
                <div id="address">
                    <p>Address:</p>
                    <input type="text" placeholder="Street" value={street}/>
                    <input type="text" placeholder="Unit" value={unit}/>
                    <input type="text" placeholder="City" value={city}/>
                    <input type="text" placeholder="State" value={state}/>
                    <input type="text" placeholder="ZIP Code" value={zip}/>
                    <input type="text" placeholder="Country" value={country}/>
                </div>
                <button>Submit</button>
            </form>
        </>
    )


}


export default UpdateContactForm;